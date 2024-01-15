import {Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home";
import { ProductView } from "../pages/ProductView";


export function AppRoutes(){
 return(
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/productView/:product_id" element={<ProductView/>}/>
  </Routes>
 );
}