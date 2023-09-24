import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import "./width.css"
import { Navigate, Outlet, Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Jungle from "./routes/imageCollectionRoutes/Jungle";
import Oceans from "./routes/imageCollectionRoutes/Oceans";
import Hills from "./routes/imageCollectionRoutes/Hills";
import Sunset from "./routes/imageCollectionRoutes/Sunset";
import Waterfalls from "./routes/imageCollectionRoutes/Waterfalls";
import { connect } from "react-redux";
import CategoryNavigation from "./components/CategoryNavigation";
import Auth from "./routes/Auth";
import { authCheck } from "./redux/AuthActionCreator";
import LogOut from "./components/LogOut";

const mapStateToProps = state =>{
  return{
    categoryRouteEnabled:state.categoryRouteEnabled,
    token:state.token,
    currentUserName:state.currentUserName
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    authCheck:()=>{
      dispatch(authCheck())
    }
  }
}
const MainComponent = (props) => {
  console.log(props.currentUserName)
useEffect(()=>{
props.authCheck();
},[])


  return <div>
   <Navigation />
  {props.categoryRouteEnabled && <CategoryNavigation />}
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/logout" element={<LogOut />}/>
    <Route element={props.token===null?<Outlet />:<Navigate to="/" />} >
   <Route path="/auth" element = {<Auth />} />
</Route>

    
   {/* category-routes */}
   <Route path="/jungle" element={<Jungle />} />
   <Route path="/ocean" element={<Oceans />} />
   <Route path="/hills" element={<Hills />} />
   <Route path="/sunset" element={<Sunset />} />
   <Route path="/waterfalls" element={<Waterfalls />} />
   </Routes>
  </div>;
};

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);
