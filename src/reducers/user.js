// User Reducer

const userState = [];

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
};
export default userReducer;