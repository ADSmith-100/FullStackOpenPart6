import React from "react";
import { connect } from "react-redux";
import { vote4 } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

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
  // const dispatch = useDispatch();

  let anecdotesByVotes = [...props.anecdotes];
  anecdotesByVotes.sort(
    (a, b) => (a.votes < b.votes ? 1 : b.votes < a.votes ? -1 : 0)
    //could also use return a.likes.localeCompare(b.likes)I think
  );

  let filteredAnecdotesByVotes = anecdotesByVotes.filter((a) =>
    a.content.toLowerCase().includes(props.filter.toLowerCase())
  );

  // console.log(anecdotesByVotes, filteredAnecdotesByVotes);

  return (
    <>
      {filteredAnecdotesByVotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            props.vote4(anecdote);
            props.setNotification(`you voted '${anecdote.content}'`, 10);
            // dispatch(vote4(anecdote));
            // dispatch(setNotification(`you voted '${anecdote.content}'`, 10));
            // dispatch(notifyVote(anecdote.content));
            // setTimeout(() => {
            //   dispatch(notifyRemove());
            // }, 5000);
          }}
        />
      ))}
    </>
  );
};

const mapDispatchToProps = {
  vote4,
  setNotification,
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filterTerms,
  };
};

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdotes;

//\\//\\//\\//\\//\/\/\/\/\/\/\/\/\/\\\\\\\\\\\\\\
//////////\\\\\\\\\\///////\\\\\\\\///
