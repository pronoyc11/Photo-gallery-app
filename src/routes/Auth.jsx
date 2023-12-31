import React, { useEffect, useState } from "react";
import { Alert, Badge, Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { useFormik } from 'formik';
import { connect } from "react-redux";
import { authentication, clearAuthMsg } from "../redux/AuthActionCreator";
import { categoryRouteDisabling } from "../redux/ActionCreator";


const mapStateToProps = state => {
  return {
    authMsg:state.authMsg
  }
}

const mapDispatchToprops = dispatch =>{
    return {
        authentication : (email,password,mode)=>{
            dispatch(authentication(email,password,mode));
        },
        categoryRouteDisabling:()=>{
          dispatch(categoryRouteDisabling())
        },
        clearAuthMsg:()=>{
          dispatch(clearAuthMsg())
        }
    }
}



const Auth = (props) => {

  const [mode,setMode] = useState("signUp");
useEffect(()=>{
props.categoryRouteDisabling();
props.clearAuthMsg();
},[])





    const validate = values => {
        const errors = {};
      
      if(mode === "signUp"){
        if (!values.name) {
            errors.name = 'Required';
          } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
          }
        
      }
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 6) {
          errors.password = 'Must be 6 characters or more';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    


    const formik = useFormik({
        initialValues: {
          name: '',
          password: '',
          email: '',
        },
        validate,
        onSubmit: values => {
         if(mode === "signUp"){
          props.authentication(values.name,values.email,values.password);
         }else{
          props.authentication(null,values.email,values.password);
         }
         
        },
      });




 

    const changeMode = ()=>{
       if(mode === "signUp"){
        setMode("logIn");
       }else if(mode === "logIn"){
        setMode("signUp");
        
       }
    }

  return (
    <div style={{
       textAlign:"center",
       border:"1px solid white",
       borderRadius:"0.5rem",
       overflow:"hidden",
       padding:"3rem"

    }}>
 { props.authMsg !== null?     
<Alert color="danger">
  {props.authMsg}
</Alert>:null}
      <Form onSubmit={formik.handleSubmit}>
    {mode === "signUp" && (  <FormGroup floating>
          <Input
            id="Name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            
          />
          <Label for="Name" className="text-black">Name</Label>
          {formik.touched.name && formik.errors.name ? (
         <div className="text-warning fst-italic">{formik.errors.name}</div>
       ) : null}
        </FormGroup> 
        
        )}
        <FormGroup floating>
          <Input
            id="Email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            
          />
          <Label for="Email" className="text-black">Email</Label>
          {formik.touched.email && formik.errors.email ? (
         <div className="text-warning fst-italic">{formik.errors.email}</div>
       ) : null}
        </FormGroup>{" "}
   
        <FormGroup floating>
          <Input
            id="Password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Label for="Password" className="text-black">Password</Label>
          {formik.touched.password && formik.errors.password ? (
         <div className="text-warning fst-italic">{formik.errors.password}</div>
       ) : null}
        </FormGroup>{" "}
       
        <Button type="submit" size="lg">{mode}</Button>
        <br />
        <br />
       
        <FormText color="white" className="text-white fs-6">
            {mode==="signUp"?"Already signed Up?":"Didn't sign up yet?"} Switch to <Badge className="fs-6"  type="button" onClick={changeMode}> {mode === "signUp"?"Log In":"Sign Up"}</Badge>
        </FormText>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToprops)(Auth);
