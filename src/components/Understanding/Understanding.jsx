import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';



function Understanding () {
const [understanding, setUnderstanding] = useState();

const dispatch = useDispatch();
const history = useHistory();

const addUnderstanding = () => {      
    
  dispatch({
    // action.type
    type: 'ADD_UNDERSTANDING',
    // action.payload
    payload: understanding 
   
  });
   history.push('/Supported');
  console.log('understanding', understanding);
}
  return (
  <div>
    <h1>How well are you understanding the content?</h1>
    <p>Understanding?</p>
    <input type="number" min='0' max='5' onChange={(e) => {
            setUnderstanding(e.target.value);
          }} ></input>
    <button onClick={addUnderstanding}>Next</button>
  
  </div>
  )
}

export default Understanding; 