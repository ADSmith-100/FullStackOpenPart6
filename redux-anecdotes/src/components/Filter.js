import React from "react";
import { useDispatch } from "react-redux";
import { filterList } from "../reducers/filterReducer";
//if you import filterList without the { } it will result in action.type being undefined in filterReducer!  Pissed me off

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(filterList(searchTerm));
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

export default Filter;
