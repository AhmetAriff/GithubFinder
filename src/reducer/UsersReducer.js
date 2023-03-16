const UsersReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        users: action.users,
        loading: false,
      };

    case "SET_LOADİNG":
      return {
        ...state,
        loading: true,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default UsersReducer;
