import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';


function TodaysFeeling () {
const [feeling, setFeeling] = useState();

const dispatch = useDispatch();


const addFeeling = () => {      
    
  dispatch({
    // action.type
    type: 'ADD_FEELING',
    // action.payload
    payload: feeling 
   
  });
  console.log('feeling', feeling);
}
  return (
  <div>
    <h1>How are you feeling today?</h1>
    <p>Feeling?</p>
    <input type="number" min='0' max='5' onChange={(e) => {
            setFeeling(e.target.value);
          }} ></input>
    <button onClick={addFeeling}>Next</button>
  
  </div>
  )
}

export default TodaysFeeling; 