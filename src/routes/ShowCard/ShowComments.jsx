import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { clearTempCmnts, deliverNameCmntPair, deliveryCmntTotheRedux, deliveryTemporaryCmnts, deliveryUsersTotheRedux, postCommentToServer, retreiveAllUsers, retrieveComments } from "../../redux/CommentsActionCreator";

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    currentCmnts:state.currentCmnts,
    allUsers:state.allUsers,
    currentUserName:state.currentUserName,
    temporaryCmnts:state.temporaryCmnts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deliveryCmntTotheRedux:(cmnts)=>{
      dispatch(deliveryCmntTotheRedux(cmnts))
    },
    deliveryUsersTotheRedux: users =>{
      dispatch(deliveryUsersTotheRedux(users))
    },
    deliveryTemporaryCmnts:(cmnt)=>{
      dispatch(deliveryTemporaryCmnts(cmnt));
    },
    clearTempCmnts:()=>{
      dispatch(clearTempCmnts());
    }
  };
};

const ShowComments = (props) => {
  useEffect(() => {
//retreiving all comments starts here.
retrieveComments()
.then(res =>{ 
  const retrievedCmnt =  res.data ;
  const commentArr = [];
  for(let key in retrievedCmnt){
    commentArr.push(retrievedCmnt[key])
  }
  let allCommentsOfThisImage = commentArr.filter(cmnt => cmnt.sil === props.specificLink)
  let allCmntsNoLink = [];
  for(const value of allCommentsOfThisImage){
    allCmntsNoLink.push({ui:value.ui,cmnt:value.specificCmnt});
  }
  props.deliveryCmntTotheRedux(allCmntsNoLink);
}).catch(err=>console.log(err));
  //retreiving all comments ends here.
  //retreiving all users starts here.
retreiveAllUsers()
.then(res=>{
     let usersArr = [];
     for(const key in res.data){
      usersArr.push(res.data[key])
     }
     props.deliveryUsersTotheRedux(usersArr);
})
.catch(err=>console.log(err))
  //retreiving all users ends here.

//clearing temp cmnt state
props.clearTempCmnts();

  },[]);
  //local States go here
const [currentCmnt,setCurrentCmnt] = useState("");
const [allTemp,setAllTemp] = useState([]);
  //End of local state section

  //Making the final name,comment pair starts

 const pairCmnts = props.currentCmnts;
 const pairUsers = props.allUsers;
let theFinalpair = [];

if(pairCmnts.length > pairUsers.length){

  for(const key in pairCmnts){
   
    for(const key1 in pairUsers ){
       if(pairCmnts[key].ui===pairUsers[key1].userId){
       
        theFinalpair.push({name:pairUsers[key1].name,comment:pairCmnts[key].cmnt})

       }

    }

  }



}else if(pairUsers.length > pairCmnts.length){


  for(const key in pairUsers){
   
    for(const key1 in pairCmnts ){
       if(pairCmnts[key1].ui===pairUsers[key].userId){
       
        theFinalpair.push({name:pairUsers[key].name,comment:pairCmnts[key1].cmnt})

       }

    }

  }


}

const theFinalCmnt = theFinalpair.map(pair => {
  return <div key={new Date()*Math.random()}>
   <h5>{pair.name}</h5>
   <p>{pair.comment}</p>

  </div>
});


 //Making the final name,comment pair ends
//submit function starts
const handleSubmit = (e)=>{


  const comment = {sil:props.specificLink,ui:props.userId,specificCmnt:currentCmnt};

  //Posting previously done comment to the server
   props.deliveryTemporaryCmnts(currentCmnt);
  postCommentToServer(comment);
  allTemp.push(currentCmnt);
  setAllTemp(allTemp);
  //clearing the input
  
  


  

  e.preventDefault();
}

 
//submit function ends
//onchange function starts
const handleChange = (e) =>{
    setCurrentCmnt(e.target.value);
}
//onchange function ends


  return (
    <div>
      <div className="all-comments text-black">
        {theFinalCmnt}
    {props.temporaryCmnts.map(c=>{
  return <div key={new Date()*Math.random()}>
    <h5>{props.currentUserName}</h5>
    <p>{c}</p></div>
})}
        { currentCmnt===""?null:(
          <div className="text-info mb-2">
             
           <i>hi <b>{props.currentUserName}</b>, reveal your words about this picture.</i>
          </div>
        )}
      </div>
      
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="write your comment about this picture."
          onChange={e => handleChange(e)}
          value={currentCmnt}
        />
        <button type="submit" className="btn btn-secondary">
          Comment
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowComments);
