import {createContext, useContext, useState, useEffect} from "react";

import { api } from "../services/api";


export const CardContext = createContext({});


function CardProvider({children}){

 const [data, setData] = useState([]);

 async function addProductInCard({product_id, count}){
  setData({product_id, count});
 }


 return(<CardContext.Provider value={{addProductInCard, data}}>
  {children}
 </CardContext.Provider>
 );
}