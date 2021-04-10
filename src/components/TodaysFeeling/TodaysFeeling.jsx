import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function TodaysFeeling() {
  const [feeling, setFeeling] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const addFeeling = () => {
    if (isNaN(feeling)) {
      alert('Enter something');
    } else {
      dispatch({
        // action.type
        type: 'ADD_FEELING',
        // action.payload
        payload: feeling,
      });
      history.push('/understanding');
    }

    console.log('feeling', feeling);
  };
  return (
    <div>
      <h1>How are you feeling today?</h1>
      <p>Feeling?</p>
      <TextField
        type="number"
        min="0"
        max="5"
        onChange={(e) => {
          setFeeling(e.target.value);
        }}
      ></TextField>
      <Button size="large" variant="outlined" color="primary" onClick={addFeeling}>Next</Button>
    </div>
  );
}

export default TodaysFeeling;
