import { authConstants } from "../constant"
import axios from "axios"
import { Post } from "../../lib/requests"
import { clearLocalStorage } from "../../lib/session"
import { useNavigate } from "react-router-dom"




export const login = (data) => {
    const dispatch = async (dispatch) => {
        const res = await Post("/login", data)
        console.log(res.data.loginError, "llllllllllllllllllll");
        if(res.data.loginError){
          dispatch({type:authConstants.LOGIN_SUCCESS})
        }else{

        }
        
        return res
    }
    return dispatch
}


export const signup=(data)=>{
    const dispatch=async(dispatch)=>{
        const res=await Post("/signup",data)
        return res
    }
    return dispatch
}

export const logout=(data)=>{
    
    clearLocalStorage()
    
    
}








 


