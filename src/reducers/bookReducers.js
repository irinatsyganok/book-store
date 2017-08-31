export default (state=[], action) => {
    switch (action.type) {
        //check if the action dispatched is CREATE_BOOK and act on that 
        case 'CREATE_BOOK':
            return [
               { ...state, action:action.book }
            ];
        default:
            return state;
    }
};