// the first argument posts is the initial state
const reducer = (posts = [], action) => {
  switch (action.type) {
    // payload is coming from the posts action
    case 'FETCH_ALL':
      return action.payload;
    // spread posts, add the new one to the array and update state
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
