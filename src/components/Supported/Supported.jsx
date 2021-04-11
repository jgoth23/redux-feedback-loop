import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



function Supported() {
  const [supported, setSupported] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const addSupported = () => {
    if (isNaN(supported)) {
      alert('Enter something');
    } else {
      dispatch({
        // action.type
        type: 'ADD_SUPPORTED',
        // action.payload
        payload: supported,
      });
      history.push('/comments');
    }
    console.log('supported', supported);
  };
  return (
    <div>
      <h1>How well are you being supported?</h1>
      <p>Supported?</p>
      <TextField
      variant="outlined"
        type="number"
        min="0"
        max="5"
        onChange={(e) => {
          setSupported(e.target.value);
        }}
      ></TextField>
      <div>
      <Button variant="outlined" color="primary" onClick={addSupported}>Next</Button>
      </div>
    </div>
  );
}

export default Supported;
