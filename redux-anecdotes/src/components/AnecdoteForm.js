import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notifyCreate, notifyRemove } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newNote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(newNote));
    dispatch(notifyCreate(content));
    setTimeout(() => {
      dispatch(notifyRemove());
    }, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default NewAnecdote;
