import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



function Understanding() {
  const [understanding, setUnderstanding] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const addUnderstanding = () => {
    if (isNaN(understanding)) {
      alert('Enter something');
    } else {
      dispatch({
        // action.type
        type: 'ADD_UNDERSTANDING',
        // action.payload
        payload: understanding,
      });
      history.push('/supported');
    }
    console.log('understanding', understanding);
  };
  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <p>Understanding?</p>
      <TextField
      variant="outlined"
        type="number"
        min="0"
        max="5"
        onChange={(e) => {
          setUnderstanding(e.target.value);
        }}
      ></TextField>
      <div>
      <Button size="large" variant="outlined" color="primary" onClick={addUnderstanding}>Next</Button>
      </div>
    </div>
  );
}

export default Understanding;
