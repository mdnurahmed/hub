const initialState = {
  currentKey: "create_company",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "keypress":
      let newState = Object.assign({}, state);
      newState.currentKey = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
