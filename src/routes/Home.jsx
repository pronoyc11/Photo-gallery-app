import React from 'react'
import '../App.css';
import '../css/home.css';
import { imageLinks } from './ShowCard/imageDB';
import ShowCard from './ShowCard/ShowCard';

const Home = () => {

  const showImages = imageLinks.thumbnailImages.map(img=>{
    return <ShowCard category = {img.category} link={img.link} />
  })


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

export default Home;