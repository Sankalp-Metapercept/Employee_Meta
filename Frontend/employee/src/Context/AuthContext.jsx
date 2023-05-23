// eslint-disable-next-line no-unused-vars
import React,{createContext, useState} from 'react'

export const GlobalInfo = createContext();

// eslint-disable-next-line react/prop-types
function AuthContext({children}){

    const [state, setState] = useState({
      isAuth: false,
      token: null
    })
    
   async function login(token){
    
      setState({
        isAuth: true,
        token: token
      })
   }

   async function logout(){
       
         setState({
           isAuth: false,
           token: null
         })
      }

  return (
    <GlobalInfo.Provider value={{authState : state , login, logout}} >
      {children}
    </GlobalInfo.Provider>
  )
}
export default AuthContext