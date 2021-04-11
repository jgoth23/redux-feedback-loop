import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



function Comments() {
  const [comments, setComments] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const addComments = () => {
    dispatch({
      // action.type
      type: 'ADD_COMMENTS',
      // action.payload
      payload: comments,
    });
    history.push('/feedback');

    console.log('comments', comments);
  };
  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <p>Comments</p>
      <TextField
      variant="outlined"
        type="text"
        placeholder="comments"
        onChange={(e) => {
          setComments(e.target.value);
        }}
      ></TextField>
      <div>
      <Button size="large" variant="outlined" color="primary" onClick={addComments}>Next</Button>
      </div>
    </div>
  );
}

export default Comments;
