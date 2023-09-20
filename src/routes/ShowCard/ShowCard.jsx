import React from 'react'
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import "../../css/home.css";
import { Link } from 'react-router-dom';

const ShowCard = (props) => {
  return (
    <Link to={`/${props.category}`}>
           
    <Card className='img-card' style={{
      width:"20rem",
      height:"13rem"
     }}>
    <CardImg
      alt="Card image cap"
      src={props.link}
      style={{
        width:"100%",
        height:"100%",
        
      }}
    />
    <CardImgOverlay className='overlay'>

      <p className='title'>{props.category.toUpperCase()}</p>
  

    </CardImgOverlay>
  </Card>
    </Link>
  )
}

export default ShowCard