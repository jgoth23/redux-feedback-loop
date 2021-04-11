import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function NewFeedback() {
  const history = useHistory();

  const nextPage = () => {
    history.push('/'); // Back to main page
  };

  return (
    <>
      <h1>Thank you for the feedback!</h1>
      <Button size="large" variant="outlined" color="primary" onClick={nextPage}>Leave New Feedback</Button>
    </>
  );
}
export default NewFeedback;
