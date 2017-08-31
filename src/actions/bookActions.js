//method that wraps and returns the action object
export const createBook = (book) => {
    //return action
    return {
        //unique id
        type: 'CREATE_BOOK',
        //payload
        book: book
    }
};