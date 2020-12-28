const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_LIST": {
      return "WTF";
    }

    default:
      return state;
  }
};

export const filterList = (searchTerm) => {
  return {
    type: "FILTER_LIST",
    data: {
      searchTerm: searchTerm,
    },
  };
};

export default filterReducer;
