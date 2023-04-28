import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useState,useEffect } from "react";
import { selectUserSession } from "../features/session/userSessionSlice";

function Home({setsearch,searchp}) {
   
   
    return (<>
<nav>
<Header setsearch={setsearch} searchp={searchp} />
</nav>

<Container fluid  >
      <Outlet></Outlet>
      </Container>
<Footer ></Footer>
    </>  );
    
}

export default Home;