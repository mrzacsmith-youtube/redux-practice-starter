//1.create initial state
const initialState = {
  players: [],
  isFetching: false,
  error: "",
};

//2. pass state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
