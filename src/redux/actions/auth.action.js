import firebase from 'firebase/compat/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOG_OUT } from '../actiontype'



export const login = () =>async dispatch=>{
    try {
        

        dispatch({
            type: LOGIN_REQUEST,

        })

        const provider = new firebase.auth.GoogleAuthProvider()

        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const res= await auth.signInWithPopup(provider)
        

        const accessToken = res.credential.accessToken

        const profile={
            name:res.additionalUserInfo.profile.picture.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem("wisdom-access-token",accessToken)

        sessionStorage.setItem("wisdom-user",JSON.stringify(profile))

        dispatch({
            type: LOGIN_SUCESS,
            payload: accessToken,
        })

        dispatch({
            type:LOAD_PROFILE,
            payload: profile,
        })



    } catch (error) {
        console.log(error.message)
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
    }
}

export const log_out= ()=> async dispatch=>{
    auth.signOut()
    dispatch({
        type:LOG_OUT,
    })

    sessionStorage.removeItem("wisdom-access-token")
    sessionStorage.removeItem("wisdom-user")


}