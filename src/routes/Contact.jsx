import React,{ useEffect } from 'react'
import { categoryRouteDisabling } from "../redux/ActionCreator";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch)=>{
  return {
    categoryRouteDisabling:()=>{
      dispatch(categoryRouteDisabling());
    }
  }
}


const Contact = (props) => {
  
  useEffect(()=>{
    props.categoryRouteDisabling();
  },[])
  return (
    <div className='width-body'>
    
<h3 className='text-center mt-5'>This section is still under developing process...</h3>

    </div>
  )
}

export default connect(null,mapDispatchToProps)(Contact)