import mongoose from "mongoose";
const productschema=mongoose.Schema({
  name:'',
 image:'',
  brand:'',
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categorycollection'
},
  description:'',
  prix:'',
  Qtestock:'',
})
const categoryschema=mongoose.Schema({
  category:'',
})
const productmodel=mongoose.model('productcollection',productschema)//nom model
const categorymodel=mongoose.model('categorycollection',categoryschema)//nom model
export { productmodel,categorymodel}
 