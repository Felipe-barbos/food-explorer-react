import {Routes, Route} from "react-router-dom";

import { SignIn } from "../pages/SignIn";

import { SignOut } from "../pages/SignOut";


export function AuthRoutes(){

 return(
  <Routes>
    <Route path="/" element={<SignIn/>} />
    <Route path="/signUp" element={<SignOut/>}/>
  </Routes>
 );
}