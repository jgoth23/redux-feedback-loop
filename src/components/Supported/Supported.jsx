import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';



function Supported () {
const [supported, setSupported] = useState();

const dispatch = useDispatch();
const history = useHistory();

const addSupported = () => {      
    
  dispatch({
    // action.type
    type: 'ADD_SUPPORTED',
    // action.payload
    payload: supported 
   
  });
  //  history.push('/Supported');
  console.log('supported', supported);
}
  return (
  <div>
    <h1>How well are you being supported?</h1>
    <p>Supported?</p>
    <input type="number" min='0' max='5' onChange={(e) => {
            setSupported(e.target.value);
          }} ></input>
    <button onClick={addSupported}>Next</button>
  
  </div>
  )
}

export default Supported; 