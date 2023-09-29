import React,{useEffect, useState} from 'react';
import "../../width.css";
import "../../css/imageRoutesCss/jungle.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { categoryRouteEnabling, fetchCategoryImages } from '../../redux/ActionCreator';
import ShowComments from '../ShowCard/ShowComments';

const mapStateToProps = (state)=>{
  return {
    imageLoading:state.imageLoading,
    waterfallLinks:state.waterfallLinks,
    currentUserName:state.currentUserName,
    userId:state.userId,
    token:state.token
    
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

const Waterfalls = (props) => {


  // if(props.imageLoading){
  //   console.log("image is loading still")
  // }else{
  //   console.log(props.thumbnailImageLinks.categoryImages.waterfallsLinks)
  // }


  useEffect(()=>{
   
    
   props.categoryRouteEnabling();
  },[])

  const [modal, setModal] = useState(false);
  const [link,setLink] = useState(null)

  const toggle = () => setModal(!modal);
  
  const makefaSolid = (e)=>{
    const theSpecific = e.target.classList.contains("fa-solid");
     e.target.className = theSpecific?"fa-regular fa-heart":"fa-solid fa-heart";
    
  }
 let modalContent = null;





  let specificImage = (
    <div>
      <img  className="img-fluid" src={`${link}`} alt='specificImage' />
    </div>
  )

//Show coment section function starts here.

 const showComentSection = (e)=>{
 if(props.token !== null){
  let link = e.target.parentElement.parentElement.firstChild.src
  setLink(link);
  toggle();
 }else{
  toggle();
 }
 }


 //Show comment section function ends here.
 let commentSection =  ( <div className="comment-section">
 <ShowComments specificLink = {link} />
 </div>) ;

if(props.token !== null){
  modalContent = <>
   <ModalHeader >{specificImage}</ModalHeader>
         <ModalBody>
         
          {commentSection}
         </ModalBody>
         <ModalFooter>
           <Button color="secondary" onClick={toggle}>
             Cancel
           </Button>
         </ModalFooter>
  
  </>
  }else{
    modalContent = <h1 className='text-warning p-5 text-center'>Please sign up or log in to continue!</h1>
  }

let photos = props.waterfallLinks.map(link=>{
    return (<div key={new Date()*Math.random()} className='jimg'><img className='img-fluid' src={link} alt='jnglePhotos' /><div className='img-overlay'></div><div className='icons'>
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
     
        {photos}
        <Modal isOpen={modal} toggle={toggle}>
        {modalContent}

        </Modal>
       
 
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Waterfalls);