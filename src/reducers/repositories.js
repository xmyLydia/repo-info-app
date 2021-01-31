// Repository Reducer

const repositoryState = [];

const repositoriesReducer = (state = repositoryState, action) => {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return action.repositories;
    default:
      return state;
  }
};
export default repositoriesReducer;