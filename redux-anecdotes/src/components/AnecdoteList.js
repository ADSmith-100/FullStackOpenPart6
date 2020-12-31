import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote4 } from "../reducers/anecdoteReducer";
import { notifyVote, notifyRemove } from "../reducers/notificationReducer";

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
  const filter = useSelector((state) => state.filterTerms);

  let anecdotesByVotes = [...anecdotes];
  anecdotesByVotes.sort(
    (a, b) => (a.votes < b.votes ? 1 : b.votes < a.votes ? -1 : 0)
    //could also use return a.likes.localeCompare(b.likes)I think
  );

  let filteredAnecdotesByVotes = anecdotesByVotes.filter((a) =>
    a.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredAnecdotesByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(vote4(anecdote));
            dispatch(notifyVote(anecdote.content));
            setTimeout(() => {
              dispatch(notifyRemove());
            }, 5000);
          }}
        />
      ))}
    </>
  );
};

export default AnecdoteList;
