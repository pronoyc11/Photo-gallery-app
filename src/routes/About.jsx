import React, { useEffect } from "react";
import "../width.css";
import styles from "../css/About.module.css";
import { categoryRouteDisabling } from "../redux/ActionCreator";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    categoryRouteDisabling:()=>{
      dispatch(categoryRouteDisabling())
    }
  }

}
const About = (props) => {

  useEffect(()=>{
props.categoryRouteDisabling();
  },[])

  return (
    <div className="width-body">
      <section id={styles["about-section"]}>
        <h3>About us</h3>
        <hr />
        <p>
          <h3 style={{display:"inline-block"}}>N</h3>ature<i>View</i> is a non-profit organization.It works for the
          people,who love to make nature photography and collect them.Here at
          our website we provide varius kind of natural photography collections.
          Those of you intend to join us,can contact through our website.We'll be happy to 
          have a partner in our journey.Thanks and love to all of you for visiting this page.
          Hey,one more thing,don't forget to leave a feedback. <pre>:)</pre>
        </p>
      </section>

      <p id={styles["pg"]}>All rights reserved to Nature<i>view</i>&copy;.</p>
    </div>
  );
};

export default connect(null,mapDispatchToProps)(About);
