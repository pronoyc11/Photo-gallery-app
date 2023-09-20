import React from 'react'
import { imageLinks } from '../ShowCard/imageDB';
import "../../width.css";
import "../../css/imageRoutesCss/jungle.css";

const Hills = () => {

  const Photos = imageLinks.categoryImages.hillsLinks.map(link=>{
    return (<div className='jimg'><img  src={link} alt='jnglePhotos' /><div className='img-overlay'></div><div className='icons'>
       <i className="fa-regular fa-heart"></i>
         <i className="fa-regular fa-comment"></i>
         <i className="fa-regular fa-share-from-square"></i>
     
     </div></div>);
   }
   )
   const style={
     textAlign:"center",
     top:"0",
     height:"100vh"
   }



  return (
    <div className='width-body' style={style}>
        {Photos}
    </div>
  )
}

export default Hills