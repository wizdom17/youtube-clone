import {LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOG_OUT} from "../actiontype"

const initialState = {
    accessToken:sessionStorage.getItem("wisdom-access-token")? sessionStorage.getItem("wisdom-access-token"):null,
    user:sessionStorage.getItem("wisdom-user")? JSON.parse(sessionStorage.getItem("wisdom-user")): null,
    loading:false
}

export const authReducer = (prevState = initialState , action) =>{
    const{type,payload}= action

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading:true
            }
            
            case LOGIN_SUCESS:
                return{
                    ...prevState,
                    accessToken:payload,
                    loading:false
                }

                case LOGIN_FAIL:
                return{
                    ...prevState,
                    accessToken:null,
                    loading:false,
                    error:payload
                }
                
                case LOAD_PROFILE:
                return{
                    ...prevState,
                    user:payload,
                    
                }

                case LOG_OUT:
                    return{
                        ...prevState,
                        accessToken:null,
                        user:null
                    }

        default:
            return prevState
    }
}