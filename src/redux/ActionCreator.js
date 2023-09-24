import axios from "axios";
import * as actionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";
import { imageLinks } from "../routes/ShowCard/imageDB";

export const imagesLoading = ()=>{
    return {
        type:actionTypes.IMAGE_LOADING
    }
}
export const loadThumbnailImageLink = (links)=>{
    return {
        type:actionTypes.LOAD_THUMNAIL_IMAGE_LINK,
        payload:links
    }
}

export const categoryRouteEnabling =()=> (dispatch) =>{
     dispatch({ type:actionTypes.CATEGORY_ROUTE_ENABLE})
       
    
}
export const categoryRouteDisabling =()=> (dispatch) =>{
    dispatch({ type:actionTypes.CATEGORY_ROUTE_DISABLE})
      
   
}
export const loadJungleLinks = (links)=>{
    return {
        type:actionTypes.JUNGLE_LINKS,
        payload:links
    }
}
export const loadOceanLinks = (links)=>{
    return {
        type:actionTypes.OCEAN_LINKS,
        payload:links
    }
}
export const loadHillLinks = (links)=>{
    return {
        type:actionTypes.HILL_LINKS,
        payload:links
    }
}
export const loadSunsetLinks = (links)=>{
    return {
        type:actionTypes.SUNSET_LINKS,
        payload:links
    }
}
export const loadWaterfallLinks = (links)=>{
    return {
        type:actionTypes.WATERFALL_LINKS,
        payload:links
    }
}
export const fetchCategoryImages = ()=>dispatch=>{
  
    dispatch(imagesLoading());
    
//     axios.get(baseUrl)
//     .then(res =>{ 
//        let data = null;
//         for(let key in res.data){
//             data = res.data[key]
//         }
    
// let CIL = data.categoryImages ;
// dispatch(loadJungleLinks(CIL.jungleLinks));
// dispatch(loadOceanLinks(CIL.oceanLinks));
// dispatch(loadHillLinks(CIL.hillsLinks));
// dispatch(loadSunsetLinks(CIL.sunsetLinks));
// dispatch(loadWaterfallLinks(CIL.waterfallsLinks));
    
//     })
//     .catch(err=>console.log(err))
    
    // axios.get(baseUrl+"/categoryImages")
    // .then(res=> res.data)
    // .then(links=>{

    //     dispatch(loadJungleLinks(links.jungleLinks));
    //     dispatch(loadOceanLinks(links.oceanLinks));
    //     dispatch(loadHillLinks(links.hillsLinks));
    //     dispatch(loadSunsetLinks(links.sunsetLinks));
    //     dispatch(loadWaterfallLinks(links.waterfallsLinks));


    // })
    // .catch(err=>console.log(err.message,err.error.config.data))

}
export const fetchThumbnailImages =()=> (dispatch)=>{
     






     dispatch(imagesLoading());

dispatch(loadThumbnailImageLink(imageLinks.thumbnailImages))










    //     // axios.get(baseUrl+"/thumbnailImages")
    //     axios.get(baseUrl)
    //     .then(res =>{ 
    //        let data = null;
    //         for(let key in res.data){
    //             data = res.data[key]
    //         }
        
    // let TIL = data.thumbnailImages ;
    // dispatch(loadThumbnailImageLink(TIL));
        
    //     })
    //     .catch(err=>console.log(err))
            //  .then(links=> links.data)
            //  .then(links => dispatch(loadThumbnailImageLink(links)))
            //  .catch(err=>console.log(err.message,err))
        
        // dispatch(loadJungleLinks(imageLinks.categoryImages.jungleLinks));
        // dispatch(loadOceanLinks(imageLinks.categoryImages.oceanLinks));
        // dispatch(loadHillLinks(imageLinks.categoryImages.hillsLinks));
        // dispatch(loadSunsetLinks(imageLinks.categoryImages.sunsetLinks));
        // dispatch(loadWaterfallLinks(imageLinks.categoryImages.sunsetLinks))
    
      
    

}