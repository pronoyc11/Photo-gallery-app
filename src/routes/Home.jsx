import React, { useEffect } from 'react'
import '../App.css';
import '../css/home.css';
import ShowCard from './ShowCard/ShowCard';
import { categoryRouteDisabling, fetchThumbnailImages } from '../redux/ActionCreator';
import { connect } from 'react-redux';
import Loader from '../components/Loader';

const mapStateToProps = (state)=>{
  return {
    imageLoading:state.imageLoading,
    thumbnailImageLinks:state.thumbnailImageLinks
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchThumbnailImages:()=>{
      dispatch(fetchThumbnailImages())
    },
    categoryRouteDisabling:()=>{
      dispatch(categoryRouteDisabling());
    }
  }
}


const Home = (props) => {

  useEffect(()=>{
    
    props.fetchThumbnailImages();
   
    props.categoryRouteDisabling();
    },[])
    
let showImages = null;
if(props.imageLoading){
showImages = <Loader />
}else{
  showImages = props.thumbnailImageLinks.map(img=>{
    return <ShowCard key={new Date()*Math.random()} category = {img.category} link={img.link} />
  })
}

 


  return (
    <div id='home' className='width-body'>
    {/* wellcome-section */}
    <section id='wellcome-section'>
    <h2>Wellcome</h2>
      <h4>to the world of</h4>
      <h2>Nature<i>View</i>'s</h2>
      <span>natural photography collections</span>
    </section>
    <hr />
    {/* photo-browsing-section */}
    <section id='photo-browsing'>
    <h3>browse by category</h3>
    <div className='images'>
    {showImages}
    </div>
    </section>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);