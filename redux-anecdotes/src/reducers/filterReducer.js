const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_LIST": {
      return action.data.searchTerm;
    }
    default:
      return state;
  }
};

export const filterList = (searchTerm) => {
  return {
    type: "FILTER_LIST",
    data: { searchTerm },
  };
};

export default filterReducer;
