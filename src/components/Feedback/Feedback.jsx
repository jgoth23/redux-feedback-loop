import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Feedback() {
  const history = useHistory();

  // Grabbing `getFeelings` from Redux state
  const getFeelings = useSelector((store) => {
    return store.todaysFeelingReducer;
  });
console.log('get feedback');

// Grabbing `getUnderstanding` from Redux state
const getUnderstanding = useSelector((store) => {
  return store.understandingReducer;
});
console.log('get feedback');

// Grabbing `getSupported` from Redux state
const getSupported = useSelector((store) => {
  return store.supportedReducer;
});
console.log('get feedback');

// Grabbing `getComments` from Redux state
const getComments = useSelector((store) => {
  return store.commentsReducer;
});
console.log('get feedback');

 // Called when submit button is clicked 
  const onSubmit = () => {
    console.log('onSubmit()');

    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        todaysFeeling: getFeelings,
         understanding: getUnderstanding,
          supported: getSupported,
           comments: getComments
      }
  }).then((response) => {
    history.push("/newFeedback"); //Back to start of survey
      console.log(response);
  }).catch((err) => {
      console.log(err);
  });
};
  
  
  
  
  
  
  
  return (
  <div>
    <h1>Review Your Feedback</h1>
    <p>Feeling: {getFeelings}</p>
    <p>Understanding: {getUnderstanding}</p>
    <p>Support: {getSupported}</p>
    <p>Comment: {getComments}</p>
    <button onClick={onSubmit}>Submit Feedback</button>
  </div>
  
  )
 
}

export default Feedback;