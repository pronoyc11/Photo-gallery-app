import React,{ useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { logOut } from "../redux/AuthActionCreator";

const mapDispatchToProps = dispatch =>{
  return {
    logOut:()=>{
      dispatch(logOut());
    },
  }
}
const LogOut = (props)=>{

  useEffect(()=>{
    props.logOut();
  },[])
  
  
  return (
   
    <Navigate to="/auth" />
    
    
    )
}

export default connect(null,mapDispatchToProps)(LogOut);