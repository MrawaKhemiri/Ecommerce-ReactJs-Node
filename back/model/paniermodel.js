import mongoose from "mongoose";

const panierschema=mongoose.Schema({
  IDproduct:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'productcollection'
},
  IDclient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clientcollection'
},
  qantite:'',
  status:''
})
const paniermodel=mongoose.model('paniercollection',panierschema)//nom model
export default paniermodel