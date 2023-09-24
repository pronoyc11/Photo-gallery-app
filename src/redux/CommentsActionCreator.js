import axios from "axios";
import { baseUrl } from "./baseUrl";
import * as actionTypes from "./ActionTypes";

export const retrieveComments = ()=>{
   return axios.get(baseUrl+"/comments.json");
}
export const postCommentToServer = (comment) =>{
 axios.post(baseUrl+"/comments.json",comment);
}
export const retreiveAllUsers = ()=>{
   return axios.get(baseUrl + "/users.json");
}

export const deliveryCmntTotheRedux = cmnts=>dispatch =>{
   
    dispatch({
        type:actionTypes.CMNT_SUCCESS,
        payload:cmnts
    })
}

export const deliveryUsersTotheRedux = users => dispatch =>{
    dispatch({
        type:actionTypes.USER_SUCCESS,
        payload:users
    })
}

export const deliveryTemporaryCmnts = cmnts => dispatch =>{

    dispatch({
        type:actionTypes.TEMPORARY_CMNTS,
        payload:cmnts
    })


}

export const clearTempCmnts = ()=>dispatch=>{
    dispatch({
        type:actionTypes.CLEAR_TEMP_CMNTS,
        
    })
}