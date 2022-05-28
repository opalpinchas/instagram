const initialState = {
    posts: [],
}

export function postReducer(state = initialState, action) {
    var posts
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        case 'REMOVE_POST':
            posts = state.posts.filter(post => post._id !== action.postId)
            return { ...state, posts }
        case 'ADD_POST':
            posts = [action.post, ...state.posts]
            return { ...state, posts }
        case 'UPDATE_POST':
            posts = state.posts.map(currPost =>
                (currPost._id === action.post._id) ? action.post : currPost)
            return { ...state, posts }
        default:
            return state
    }
}
