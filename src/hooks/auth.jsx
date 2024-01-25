import { createContext, useContext, useState, useEffect } from "react";

import { api} from "../services/api";


export const AuthContext = createContext({});


function AuthProvider({children}){


  const [data, setData] = useState({});
  const [card, setCard] = useState({});

  async function signIn({email, password}){


   try{
    const response = await api.post("/session", {email, password});

    const {user, token} = response.data;

    const {password: tryPassword, ...userData} = user;

    localStorage.setItem("@foodexplorer:user", JSON.stringify(userData));
    localStorage.setItem("@foodexplorer:token", token);

    //adicionando o token no cabeçalho de authenticação

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({user, token});

   } catch(error){
     if(error.response){
      alert(error.response.data.message);
     }
     else {
      alert("Não foi possível efetuar o login!");
     }
   }

  }

  function signOut(){
   localStorage.removeItem("@foodexplorer:user");
   localStorage.removeItem("@foodexplorer:token");

   setData({});
  }


  useEffect(() => {
   const token = localStorage.getItem("@foodexplorer:token");
   const user = localStorage.getItem("@foodexplorer:user");

   if(token && user){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }

   setData({
    token,
    user: JSON.parse(user)
  });

  }, []);



  function addProductInCard({product_id, count}){
    console.log({product_id, count});
  }

 


  return(
   <AuthContext.Provider value={{signIn, user: data.user, signOut, addProductInCard}}>
    {children}
   </AuthContext.Provider>
  )
}

function useAuth(){
 const context = useContext(AuthContext);

 return context;
}


export {AuthProvider, useAuth};