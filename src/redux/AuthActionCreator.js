import * as actionTypes from "./ActionTypes";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { token: token, userId: userId },
  };
};
export const authFaild = (msg) => {
  return {
    type: actionTypes.AUTH_FAILED,
    payload: msg,
  };
};
export const setCurrentUserName = name =>{
    return {
        type:actionTypes.CURRENT_USERNAME,
        payload:name
    }
}
export const logOut = ()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("currentUserName")
  return {
      type:actionTypes.AUTH_LOGOUT,

    }
  
}
//users.json functions starts here
export const postUsers = (name,userId) =>{
  return axios.post(baseUrl+"/users.json",{name:name,userId:userId})
}

export const queryUsersForName = (data,latestUserId)=>{
  let userOBJ = data;
                  let usersArr = [];
                for(let key in userOBJ){
                  usersArr.push(userOBJ[key]);
                }  
                if(usersArr.length>1){
                
                let selectedUserName = usersArr.filter(user => user.userId === latestUserId)
                localStorage.setItem("currentUserName",selectedUserName[0].name);
                return selectedUserName[0].name;
               
                }; 
}

//users.json functions ends here
export const authentication = ( name,email, password) => (dispatch) => {
  let url = null;
  let API_KEY = "AIzaSyAbr0FHGgS1kWM0yEVbJMaytQaqSE27Tlo";
  let authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
console.log(email,name,password);
  if (name) {
    url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    dispatch(setCurrentUserName(name));
    localStorage.setItem("currentUserName",name);
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }
//saving the userId of logIn moment to query into axios return of users.json database
let latestUserId = null;
  axios
    .post(url + API_KEY, authData)
    .then((res) => {
      localStorage.setItem("token", res.data.idToken);
      localStorage.setItem("userId", res.data.localId);
      let expirationTime = new Date(
        new Date().getTime() + res.data.expiresIn * 1000
      );

      localStorage.setItem("expirationTime", expirationTime);
      dispatch(authSuccess(res.data.idToken, res.data.localId));
      latestUserId = res.data.localId;
      if(name){
        return postUsers(name,res.data.localId)
        
      }else{
       return axios.get(baseUrl+"/users.json"); 
    
      }
    })
    .then(res =>{ 
       
                dispatch(setCurrentUserName( queryUsersForName(res.data,latestUserId)));
  
    })
    .catch((err) =>{ dispatch(authFaild(err.message));console.log(err) });
};


//authChecking at the root component
export const authCheck = () => dispatch =>{
    let token = localStorage.getItem("token");
    if(!token){
        //logout
        dispatch(logOut());
    }else{
        let expirationTime = new Date(localStorage.getItem("expirationTime"));
        if(expirationTime <= new Date()){
            //logout
            dispatch(logOut());
        }else{
            let userId = localStorage.getItem("userId");
            dispatch(setCurrentUserName(localStorage.getItem("currentUserName")));
            dispatch(authSuccess(token,userId));
        }
    }
}