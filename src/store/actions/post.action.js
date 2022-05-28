import { postService } from '../../services/post.service.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'


export function loadPosts() { 
    return dispatch => {
        return postService.query()
            .then(posts => {
                const action = {
                    type: 'SET_POSTS',
                    posts
                }
                dispatch(action)
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot load posts')
            })
    }
}

export function removePost(postId) { 
    return dispatch => {
        postService.remove(postId)
            .then(() => {
                console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_POST',
                    postId
                })
                showSuccessMsg(' removed')
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot remove post')
            })
    }
}


export function savePost(post) { 
    return dispatch => {
        const actionType = (post._id) ? 'UPDATE_POST' : 'ADD_POST'
        postService.save(post)
            .then(savedPost => {
                dispatch({ type: actionType, post: savedPost })
                showSuccessMsg('Post saved')
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot save post')
            })
    }
}

