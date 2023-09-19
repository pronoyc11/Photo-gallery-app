import React from 'react'
import '../App.css';
import '../css/home.css';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
const Home = () => {
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
    <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src="https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=600"
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>Jungle</p>
  

    </CardImgOverlay>
  </Card>
  {/* 2 */}
  <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=600"
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>Ocean</p>
  

    </CardImgOverlay>
  </Card>
  {/* 3 */}
  <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src="https://media.istockphoto.com/id/585282788/photo/view-of-gurtnellen-a-village-in-swiss-alps.jpg?b=1&s=612x612&w=0&k=20&c=nxRtTRQ050F_vFFuOqcDN9e3q_VjIYn2TkCxtciZJBI="
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>Hills</p>
  

    </CardImgOverlay>
  </Card>
  {/* 4 */}
  <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src="https://images.pexels.com/photos/2441461/pexels-photo-2441461.jpeg?auto=compress&cs=tinysrgb&w=600"
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>Sunset</p>
  

    </CardImgOverlay>
  </Card>
  {/* 5 */}
  <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src="https://images.pexels.com/photos/953182/pexels-photo-953182.jpeg?auto=compress&cs=tinysrgb&w=600"
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>Waterfalls</p>
  

    </CardImgOverlay>
  </Card>
  {/* 2 */}

    </div>
    </section>
    </div>
  )
}

export default Home;