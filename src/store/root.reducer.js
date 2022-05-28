import { combineReducers } from 'redux'
import { postReducer } from './reducers/post.reducer.js'
import { userReducer } from './reducers/user.reducer.js'

export const rootReducer = combineReducers({
    postModule: postReducer,
    userModule: userReducer
})



