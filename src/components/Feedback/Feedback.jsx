import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Feedback() {
  const history = useHistory();

  const getFeelings = useSelector((store) => {
    return store.todaysFeelingReducer;
  });
console.log('get feedback');

const getUnderstanding = useSelector((store) => {
  return store.understandingReducer;
});
console.log('get feedback');

const getSupported = useSelector((store) => {
  return store.supportedReducer;
});
console.log('get feedback');

const getComments = useSelector((store) => {
  return store.commentsReducer;
});
console.log('get feedback');
//history
  
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
    history.push("/newFeedback");
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