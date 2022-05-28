import {combineReducers} from 'redux'
import { postReducer } from './reducers/post.reducer.js'

export const rootReducer = combineReducers({
    postModule : postReducer,
})



