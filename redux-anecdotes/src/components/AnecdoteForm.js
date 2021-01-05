import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    props.createAnecdote(content);
    props.setNotification(`you created '${content}'`, 10);
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

const mapStateToProps = (state) => ({});

const ConnectedNewAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAnecdote);

export default ConnectedNewAnecdote;
