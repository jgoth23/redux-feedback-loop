import React from 'react';
import { useSelector } from 'react-redux';

function Feedback() {
  const getFeedback = useSelector((store) => {
    return store;
  });
console.log('get feedback', getFeedback);
//history
  
  const onSubmit = () => {
    console.log('onSubmit()');

    axios({
      method: 'POST',
      url: '/feedback',
      data: req.body
  }).then((response) => {
    history.push("/feedback");
      console.log(response);
  }).catch((err) => {
      console.log(err);
  });
};
  
  
  
  
  
  
  
  return (
  <div>
    <h1>Review Your Feedback</h1>
    <p>Feeling: {getFeedback.todaysFeelingReducer}</p>
    <p>Understanding: {getFeedback.understanding}</p>
    <p>Support: {getFeedback.support}</p>
    <p>Comment: {getFeedback.comment}</p>
  </div>
  
  )
 
}

export default Feedback;