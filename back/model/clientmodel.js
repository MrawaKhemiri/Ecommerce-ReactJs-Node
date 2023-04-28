import mongoose from "mongoose";
const clientschema=mongoose.Schema({
nom:'',
prenom:'',
email:'',
mdp:'',
role:"",
})
const clientmodel=mongoose.model('clientcollection',clientschema)//nom model
export default clientmodel
 