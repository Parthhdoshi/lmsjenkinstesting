"use client"
import axios from "axios";
import { useReducer, createContext } from "react";

const initialState = {
  user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const Provider = ({children}) => {
    const [ state, dispatch ] = useReducer(rootReducer, initialState)
    
    axios.get('/api/user',{
      onDownloadProgress: progressEvent => {
        console.log(console.log(Math.round((progressEvent.loaded / progressEvent.total)*100)))
      }
    }).then((res)=>{

    })

    // useEffect(()=>{
    //     dispatch({
    //         type:"LOGIN",
    //         payload:JSON.parse(window.localStorage.getItem("user"))
    //     })
    // },[])

    return(
        <Context.Provider value={{state, dispatch}} > { children } </Context.Provider>
    )
}

export { Context, Provider }