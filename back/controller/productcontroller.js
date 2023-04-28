import asynchandler from 'express-async-handler'

import {productmodel,categorymodel} from '../model/productmodel.js'
function getFileExtension(filename){

  // get file extension
  const extension = filename.split('.').pop();
  return extension;
}
// add category
const addCategory=asynchandler(async(req,resp)=>{
  const category=new categorymodel({
    category:req.body.category,
  })
  category.save()
  resp.json(category)
})
// get category
const getCategory=asynchandler(async(req,resp)=>{
  let categories=await categorymodel.find()
  resp.json(categories)
})
// get category by id
const getCategoryById=asynchandler(async(req,resp)=>{
  let category=await categorymodel.findById(req.params.id)
  resp.json(category)
})
//delete category
const deleteCategory=asynchandler(async(req,resp)=>{
  await categorymodel.deleteOne({_id:req.params.id})
  resp.json(200)
})
//update category
const updateCategory=asynchandler(async(req,resp)=>{
  await categorymodel.updateOne({_id:req.params.id},{category:req.body.category})
  resp.json(200)
})

//post add product
const addproduct=asynchandler(async(req,resp)=>{
  if(req.files!=null){
let imgs=req.files.image
imgs.mv('./public/upload/'+imgs.name)
console.log(imgs)
const product=new productmodel({
  name:req.body.name,
  image:imgs.name,//image:imgs.name enregistré dans la base avec name
  brand:req.body.brand,
  category:req.body.category,
  description:req.body.description,
  prix:req.body.prix,
  Qtestock:req.body.Qtestock,
  
})
if (getFileExtension(req.files.image.name)=='jpg') {
  product.save()
}
else{
  console.log('erreur image')
}
  }
  
  else{
    const product=new productmodel({
      name:req.body.name,
      image:null,//image:imgs.name enregistré dans la base avec name
      brand:req.body.brand,
      category:req.body.category,
      description:req.body.description,
      prix:req.body.prix,
      Qtestock:req.body.Qtestock,
    })
    product.save()
  }
  resp.json(200)
})


  // get article 
  const displayArticle=asynchandler(async (req,resp)=>{
    const article=await productmodel.find()
    resp.json(article)
  })
  // display product by id
  const displayOneProduct=asynchandler(async(req,resp)=>{
    const oneProduct=await productmodel.findById(req.params.id)
    resp.json(oneProduct)
  })
  //delete product
  const deleteProduct=asynchandler(async(req,resp)=>{
    await productmodel.findByIdAndDelete(req.params.id)
    resp.json(200)
  })
  //update procuct
  const updateProduct=asynchandler(async(req,resp)=>{
    if(req.files!=null){
    let imgs=req.files.image
imgs.mv('./public/upload/'+imgs.name)
    let product={
      name:req.body.name,
 image:imgs.name,
  brand:req.body.brand,
  category:req.body.category ,
  description:req.body.description,
  prix:req.body.price,
  Qtestock:req.body.Quantity,
    }
    await productmodel.findByIdAndUpdate(req.params.id,product)
    resp.json(200)
  }
    else{
      let product={
        name:req.body.name,

    brand:req.body.brand,
    category:req.body.category ,
    description:req.body.description,
    prix:req.body.price,
    Qtestock:req.body.Quantity,
      }
      await productmodel.findByIdAndUpdate(req.params.id,product)
      resp.json(200)
    }
  
 
  })
  // search product
  const searchproduct=asynchandler(async(req,resp)=>{
    const product=await productmodel.find({name:req.body.search})
  resp.json(product)
  }
  )
export {searchproduct,getCategoryById,updateCategory,deleteCategory,updateProduct,deleteProduct, addproduct,addCategory,getCategory,displayArticle,displayOneProduct}