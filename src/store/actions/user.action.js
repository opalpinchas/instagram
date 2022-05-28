import { userService } from '../../services/user.service.js'

import { showErrorMsg } from '../../services/event-bus.service.js'

export function logout() { 
    return dispatch => {
        userService.logout()
            .then(() => {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot logout')
            })
    }
}

export function login(credentials) { 
    return dispatch => {
        userService.login(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot login')
            })
    }

}

export function signup(credentials) { 
    return dispatch => {
        userService.signup(credentials)
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    user
                })
            })
            .catch(err => {
                console.error('Error:', err)
                showErrorMsg('Cannot signup')
            })
    }
}


