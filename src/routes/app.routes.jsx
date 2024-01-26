import {Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home";
import { ProductView } from "../pages/ProductView";
import { Cart } from "../pages/Cart";


export function AppRoutes(){
 return(
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/productView/:product_id" element={<ProductView/>}/>
   <Route path="/cart" element={<Cart/>}/>
  </Routes>
 );
}