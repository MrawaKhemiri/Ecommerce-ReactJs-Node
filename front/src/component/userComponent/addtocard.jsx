import { useDispatch } from "react-redux";
import {addProductCard} from"../../features/card/userCardSlice"
import { useRef } from "react";

function AddtoCard() {
const dispatch=useDispatch()
const title=useRef(null)
const name=useRef(null)


const addproduct=(e)=>{
e.preventDefault()
const data={
    title:title.current.value,
    name:name.current.value
}
dispatch(addProductCard(data))
title.current.value=null,
name.current.value= null
console.log(title.current.value)
}



    return ( <div>
        <h1>add to card</h1>
        <form method="post" onSubmit={addproduct}>
        <input type="text" ref={name}/>
<input type="text" ref={title}/>
<button type="submit"> add</button>
        </form>

    </div> );
}

export default AddtoCard;