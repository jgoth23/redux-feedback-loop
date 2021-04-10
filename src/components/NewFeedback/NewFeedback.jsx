import React from 'react';
import { useHistory } from 'react-router-dom';

function NewFeedback() {
  const history = useHistory();

  const nextPage = () => {
    history.push('/'); // Back to main page
  };

  return (
    <>
      <h1>Feedback!</h1>
      <button onClick={nextPage}>Leave New Feedback</button>
    </>
  );
}
export default NewFeedback;
