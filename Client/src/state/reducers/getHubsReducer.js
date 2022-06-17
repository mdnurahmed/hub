const initialState = {
  hubs: [],
  page: 1,
  company_id: "1",
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "next_page":
      newState = Object.assign({}, state);
      newState.page = state.page + 1;
      return newState;
    case "prev_page":
      if (state.page == 1) return state;
      newState = Object.assign({}, state);
      newState.page = state.page - 1;
      return newState;
    case "set_hubs":
      newState = Object.assign({}, state);
      newState.hubs = action.payload;
      return newState;
    case "change_company":
      newState = Object.assign({}, state);
      newState.company_id = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
