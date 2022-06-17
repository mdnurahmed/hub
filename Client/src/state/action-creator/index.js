export const keyPress = (key) => {
  return (dispatch) => {
    dispatch({
      type: "keypress",
      payload: key,
    });
  };
};

export const nextPage = () => {
  return (dispatch) => {
    dispatch({
      type: "next_page",
    });
  };
};

export const prevPage = () => {
  return (dispatch) => {
    dispatch({
      type: "prev_page",
    });
  };
};

export const setHubs = (hubs) => {
  return (dispatch) => {
    dispatch({
      type: "set_hubs",
      payload: hubs,
    });
  };
};

export const changeCompany = (comapny_id) => {
  return (dispatch) => {
    dispatch({
      type: "change_company",
      payload: comapny_id,
    });
  };
};
