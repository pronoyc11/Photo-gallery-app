
import { imageLinks } from "../routes/ShowCard/imageDB";
import * as actionTypes from "./ActionTypes";

const initialState = {
    imageLoading:false,
    thumbnailImageLinks:imageLinks.thumbnailImages,
    
    categoryRouteEnabled:false,
    jungleLinks:imageLinks.categoryImages.jungleLinks,
    oceanLinks:imageLinks.categoryImages.oceanLinks,
    hillLinks:imageLinks.categoryImages.hillsLinks,
    sunsetLinks:imageLinks.categoryImages.sunsetLinks,
    waterfallLinks:imageLinks.categoryImages.waterfallsLinks,
    authMsg:null,
    token:null,
    userId:null,
    currentUserName:null,
    cmntIsLoading:true,
    currentCmnts:[],
    allUsers:[],
    temporaryCmnts:[]
}
export const imageReducer = (state=initialState,action) =>{
    switch(action.type){
     case actionTypes.IMAGE_LOADING:
     return {
        ...state,
        imageLoading:true,
    
     }
     break;
     case actionTypes.LOAD_THUMNAIL_IMAGE_LINK:
        return {
            ...state,
            imageLoading:false,
            thumbnailImageLinks:action.payload,
            
        }
    break;

    case actionTypes.CATEGORY_ROUTE_ENABLE:
        return{
            ...state,
            categoryRouteEnabled:true,
        }
    break;
    case actionTypes.CATEGORY_ROUTE_DISABLE:
        return {
            ...state,
             categoryRouteEnabled:false,
        }
    break;
    case actionTypes.JUNGLE_LINKS:
        return {
            ...state,
            imageLoading:false,
            jungleLinks:action.payload
        }
    break;
    case actionTypes.OCEAN_LINKS:
        return {
            ...state,
            imageLoading:false,
            oceanLinks:action.payload
        }
    break;
    case actionTypes.SUNSET_LINKS:
        return {
            ...state,
            imageLoading:false,
            sunsetLinks:action.payload
        }
    break;
    case actionTypes.HILL_LINKS:
        return {
            ...state,
            imageLoading:false,
            hillLinks:action.payload
        }
    break;
    case actionTypes.WATERFALL_LINKS:
      
        return {
            ...state,
            imageLoading:false,
            waterfallLinks:action.payload
        }
    break;
    //authentication stuffs
    case actionTypes.AUTH_SUCCESS:
        
        return {
            ...state,
            token:action.payload.token,
            userId:action.payload.userId
        }
    break;
    case actionTypes.AUTH_FAILED:
        return {
            ...state,
            authMsg:action.payload
        }
    break;
    case actionTypes.AUTH_LOGOUT:
        return{
            ...state,
            token:null,
            userId:null
        }
    break;
    case actionTypes.CMNT_SUCCESS:
       
        return {
        ...state,
        currentCmnts:action.payload
        }
    break;
    case actionTypes.USER_SUCCESS:
        return{
            ...state,
            allUsers:action.payload
        }
    break;
    case actionTypes.TEMPORARY_CMNTS:
      
     
        
        return {
           ...state,
           temporaryCmnts: state.temporaryCmnts.concat(action.payload)
        }
    break;
    case actionTypes.CLEAR_TEMP_CMNTS:
        return{
            ...state,
            temporaryCmnts:[]
        }
    break;
    case actionTypes.CLR_AUTH_MSG:
        return {
            ...state,
            authMsg:null
        }
    case actionTypes.CURRENT_USERNAME:
        
        return {
            ...state,
            currentUserName:action.payload
        }

    default:
    return state;


    }
}