import React from 'react'
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import "../../css/home.css";
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { categoryRouteEnabling } from '../../redux/ActionCreator';

const mapDispatchToProps = (dispatch)=>{
  return{
    categoryRouteEnabling:()=>{
      dispatch(categoryRouteEnabling());
    }
  }
}

const ShowCard = (props) => {
const makeCategoryRouteEnable = ()=>{
  props.categoryRouteEnabling();
}


  return (
    <Link  onClick={makeCategoryRouteEnable} to={`/${props.category}`}>
           
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

export default connect(null,mapDispatchToProps)(ShowCard);