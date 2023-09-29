
 import React, { useRef,useEffect } from 'react';
import {categoryRouteDisabling} from "../redux/ActionCreator";
import { Button, Form, FormText, Input, Label } from "reactstrap";
import styles from "../css/Contact.module.css";
import { connect } from "react-redux";
import emailjs from '@emailjs/browser';

const mapDispatchToProps = (dispatch)=>{
  return {
    categoryRouteDisabling:()=>{
      dispatch(categoryRouteDisabling());
    }
  }
}
const mapStateToProps = state =>{
  return {
    currentUserName:state.currentUserName
  }
}

const Contact = (props) => {
  
  const form = useRef();
useEffect(()=>{
 props.categoryRouteDisabling();
},[])


  const sendEmail = (e) => {
    e.preventDefault();
const formm = document.getElementById("catch");
    emailjs.sendForm('contact_service', 'contact_form', formm, 'ay5j2pLir8Dr5xhId')
      .then((result) => {
          alert("Email sent successfully.");
      }, (error) => {
          alert("unable to send email.");
      });
      formm.user_email.value = "";
      formm.message.value = "";
  };

  return (<div id={styles["width"]}>
  <h3 style={{margin:"2rem 0"}}>Contact us</h3>
    <Form id="catch" style={{
        padding:"2rem",
  textAlign: "center",
  border:"1px solid white",
  borderRadius:"1rem",
  marginTop:"1.5rem"
    }}  ref={form} onSubmit={sendEmail}>
     <Label>Name</Label>
     <Input type="text" name="user_name" value={props.currentUserName} />
     
      <Label>Email</Label>
      <Input placeholder="write your email to recieve reply from the author.(pronoy) " type="email" name="user_email" required />
      <Label>Message</Label>
      <Input type="textarea" name="message" placeholder="your message goes here." required />
{props.currentUserName?(<Button id={styles["button"]} type="submit">Send</Button>):<Button id={styles["button"]} disabled size="lg" type="submit">Send</Button>}
<FormText color="white" id={styles["formtext"]}>You can't email to the author without signing up or logging in!</FormText>
    </Form>
 </div> );
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);