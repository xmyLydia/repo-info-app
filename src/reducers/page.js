// Page Reducer

const pageState = 1;

const pageReducer = (state = pageState, action) => {
    switch (action.type) {
        // case 'SET_PAGE':
        //     return { ...state, page: action.page++ }
        default:
            return state;
    }
};
export default pageReducer;