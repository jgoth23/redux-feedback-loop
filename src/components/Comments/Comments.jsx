import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
      <input
        type="text"
        placeholder="comments"
        onChange={(e) => {
          setComments(e.target.value);
        }}
      ></input>
      <button onClick={addComments}>Next</button>
    </div>
  );
}

export default Comments;
