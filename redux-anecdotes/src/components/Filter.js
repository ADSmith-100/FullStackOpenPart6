import React from "react";
import { connect } from "react-redux";
import { filterList } from "../reducers/filterReducer";
//if you import filterList without the { } it will result in action.type being undefined in filterReducer!  Pissed me off

const Filter = (props) => {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    props.filterList(searchTerm);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  filterList,
};

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default ConnectedFilter;
