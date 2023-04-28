
import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {BrowserRouter,Routes,Route, Navigate, useNavigate}from 'react-router-dom'
import Home from './component/home';
import Products from './component/ProductComponent/products';
import Contactus from './component/contactus';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import AddProduct from './component/adminComponent/addProduct';
import Addcategory from './component/adminComponent/addCategory';
import Detailsproduct from './component/ProductComponent/detailsproduct';
import Updateproduct from'./component/adminComponent/updateProduct';
import Inscription from './component/userComponent/inscription';
import Login from './component/userComponent/login';
import { useState } from 'react';
import Displaycart from './component/userComponent/displayCart';
import Adminpage from './component/adminComponent/adminPage';
import Dashboard from './component/adminComponent/dashboard';
import Listcategory from './component/adminComponent/listCategory';
import Listcart from './component/adminComponent/listCart';
import Updatecategory from './component/adminComponent/updateCategory';
import axios from 'axios';
import { useSelector } from "react-redux";

function App() {
  
  
  const [search,setsearch]=useState("")
  const [article,setarticle]=useState([])
  let prod={
    search:searchp
   }
    async function searchp() {

        await axios.post("http://localhost:8001/searchproduct",prod)
    .then(response=> response.data)
    .then(res=>{setarticle(res)})
  
    }
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home  searchp={searchp} setsearch={setsearch}/>}>
<Route path='/'element={<Products article={article} setarticle={setarticle}/>}/>

<Route path='/adminpage' element={ 
  <Adminpage/>

}>
<Route path='/adminpage' element={<Dashboard/> }/>
<Route path='/adminpage/addProduct'element={<AddProduct/>}/>
<Route path='/adminpage/listproduct'element={<Products/>}/>
<Route path='/adminpage/details/:id'element={<Detailsproduct/>}/>
<Route path='/adminpage/updateProduct/:id' element={<Updateproduct/>}/>
<Route path='/adminpage/addcategory' element={<Addcategory/>}/>
 <Route path='/adminpage/listCategory' element={<Listcategory/>} />
 <Route path='/adminpage/updateCategory/:id' element={<Updatecategory/>}/>
 <Route path='/adminpage/listCart' element={<Listcart/>} />
  </Route>
<Route path='/contact'element={<Contactus/>}/>


<Route path='/details/:id'element={<Detailsproduct/>}/>
<Route path='/updateProduct/:id' element={<Updateproduct/>}/>
<Route path='/inscription' element={<Inscription/>}/>

<Route path='/login'element={<Login />}/>
<Route path='/displaycart'element={<Displaycart/>}/>
      </Route>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
