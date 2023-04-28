import asynchandler from 'express-async-handler'

import clientmodel from '../model/clientmodel.js'
import paniermodel from'../model/paniermodel.js'
import {productmodel} from'../model/productmodel.js'





  // add card
  const addCard=asynchandler(async(req,resp)=>{
    let productexist=await paniermodel.findOne({IDproduct:req.params.id})
    try {
      console.log(req.session.clientsession);
      if (!req.session.clientsession) {
        throw new Error('Client session not found');
      }
      if (productexist==null) {
      const Cart = new paniermodel({
        qantite: req.body.qantite,
        IDproduct: req.params.id,
        IDclient: req.session.clientsession.id,
        status:"Ordred",
      });
      console.log('addto cart::id' + req.session.clientsession.id);
      let product=await productmodel.findById(req.params.id)
  if ((req.body.qantite>0)&&(req.body.qantite<=product.Qtestock)) {
      await Cart.save();
      resp.json('cart:',Cart);}
      else{
        resp.json("quantity isn't enough")
             console.log('quantité invalide')
           }
    }
    
    else{
      let quantity=(await paniermodel.findOne({IDproduct:req.params.id})).qantite
      let q=parseFloat(req.body.qantite)+parseFloat(quantity)
            await paniermodel.findOneAndUpdate({IDproduct:req.params.id},{qantite:q})
        resp.json('addcart')  
          }
    } catch (error) {
      console.error(error);
      resp.status(500).json({ message: 'Server error' });
    }
   
    
  })

//display cart
const displayCart=asynchandler(async(req,res)=>{
  let cart=await paniermodel.find({IDclient:req.session.clientsession.id}).populate('IDproduct')

  res.json(cart)
})
//delete product from cart
const deleteFromCart =asynchandler( async (req, resp) => {
  
   
    
     const product=await paniermodel.findOneAndDelete({IDclient: req.session.clientsession.id,IDproduct:req.params.id})
const cart=await paniermodel.findOne({IDclient: req.session.clientsession.id})
     resp.json(cart);
  
});
//shopping
const shop=asynchandler(async(req, resp) => {
  if (req.session.clientsession!==null) {
    const cart=await paniermodel.find({IDclient: req.session.clientsession.id}).populate('IDproduct')
if (cart.length!==null) {
  cart.map((cartItem)=>
cartItem.IDproduct.Qtestock=cartItem.IDproduct.Qtestock-cartItem.qantite,

) 
}
 else  {
resp.json("cart is empty")
 } 


    resp.json(cart)
  }
  else {
    resp.json('session is null')
  }
})

const affichagepanier=asynchandler(async(req,resp)=>{
  if (req.session.clientsession==null) {
    resp.redirect('/')
  }else{
    let panier=await paniermodel.find({IDclient:req.session.clientsession}).populate('IDproduct')// jointure avec product
  
    resp.render('affichage',{keypanier:panier})
  }
  
})


//get all cart
const getCart=asynchandler(async(req,resp)=>{
  let cart=await paniermodel.aggregate([
   
    {
      $lookup: {
        from: 'clientcollections',
        localField: 'IDclient',
        foreignField: '_id',
        as: 'client'
      },
      
    },
    {
      $lookup: {
        from: 'productcollections',
        localField: 'IDproduct',
        foreignField: '_id',
        as: 'product'
      }
    },
    {
      $group: {
        _id: '$client',
       
        carts: {
          $push: {
            product: '$product',
           status:'$status',
            quantite: '$qantite'
          },
          
        }
      }
    }
   
    ]);

  resp.json(cart)
})
// get all data (product,user,cart)
const getalldata=asynchandler(async(req,resp)=>{
  const numberproduct = (await productmodel.find()).length
  const numberuser=(await clientmodel.find()).length
  const numbercart=(await paniermodel.find()).length
  resp.json({keynbprod:numberproduct,keynbuser:numberuser,keynbcart:numbercart})
})

//comfirmorder
const comfirmorder=asynchandler(async(req,resp)=>{
  let statu=req.body.status
  let filter={IDclient:req.params.id}
 const cart= await paniermodel.updateMany(filter,{ status: statu })
resp.json(cart)
})

export   {comfirmorder,getalldata,getCart,shop,deleteFromCart,displayCart,affichagepanier,addCard}
