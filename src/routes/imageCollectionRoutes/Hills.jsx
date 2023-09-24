import React,{useEffect, useState} from 'react';
import "../../width.css";
import "../../css/imageRoutesCss/jungle.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { categoryRouteEnabling, fetchCategoryImages } from '../../redux/ActionCreator';



const mapStateToProps = (state)=>{
  return {
    imageLoading:state.imageLoading,
    hillLinks:state.hillLinks,
    categoryImageLinks:state.categoryImageLinks
  }
}
 const mapDispatchToProps = dispatch =>{
   return {
     fetchCategoryImages:()=>{
    dispatch(fetchCategoryImages())
     },
     categoryRouteEnabling:()=>{
      dispatch(categoryRouteEnabling())
     }
   }
 }

const Hills = (props) => {


  // if(props.imageLoading){
  //   console.log("image is loading still")
  // }else{
  //   console.log(props.thumbnailImageLinks.categoryImages.waterfallsLinks)
  // }


  useEffect(()=>{
    props.fetchCategoryImages();
    props.categoryRouteEnabling();
   })

  const [modal, setModal] = useState(false);
  const [link,setLink] = useState(null)
  
  const toggle = () => setModal(!modal);
  
  const makefaSolid = (e)=>{
    const theSpecific = e.target.classList.contains("fa-solid");
     e.target.className = theSpecific?"fa-regular fa-heart":"fa-solid fa-heart";
    
  }
  let specificImage = (
    <div>
      <img  style={{height:"90vh",width:"29.2rem"}} src={`${link}`} alt='specificImage' />
    </div>
  )
 const showComentSection = (e)=>{
  setLink(e.target.parentElement.parentElement.firstChild.src)
  toggle();
 }
 let commentSection =  ( <div className="comment-section">
 <div className="all-comments"></div>
  <hr />
  <form>
  <input type="text" className='form-control' placeholder='write your comment about this picture.' />
   <button type='submit' className='btn btn-secondary'>Comment</button>
  </form>
 </div>) ;

  const Photos = props.hillLinks.map(link=>{
    return (<div key={new Date()*Math.random()} className='jimg'><img  src={link} alt='jnglePhotos' /><div className='img-overlay'></div><div className='icons'>
       <i onClick={e=>makefaSolid(e)} className="fa-regular fa-heart"></i>
         <i className="fa-regular fa-comment" onClick={(e) =>{ showComentSection(e)}} ></i>
         <i className="fa-regular fa-share-from-square"></i>
     </div>
   
  
     </div>);
   }
   )
   const style={
    textAlign:"center",
    marginTop:"5rem"
  }



  return (
    <div className='width-body' style={style}>
       
        {Photos}
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader >{specificImage}</ModalHeader>
        <ModalBody>
        
         {commentSection}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Hills);