import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote4 } from "../reducers/anecdoteReducer";

//presentational component - not aware that event handler dispatches action
const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </>
  );
};

//container component - contains app logic.  coordinates presentational component anecdotes
const AnecdoteList = (props) => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);

  let anecdotesByVotes = [...anecdotes];
  anecdotesByVotes.sort(
    (a, b) => (a.votes < b.votes ? 1 : b.votes < a.votes ? -1 : 0)
    //could also use return a.likes.localeCompare(b.likes)I think
  );

  return (
    <>
      {anecdotesByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(vote4(anecdote.id))}
        />
      ))}
    </>
  );
};

export default AnecdoteList;
