import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser
}

window.us = userService

function login(credentials) {
    return storageService.query(STORAGE_KEY).then(users => {
        const user = users.find(user => user.username === credentials.username &&
            user.password === credentials.password)
            
        if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))

        return user
    })


}
function signup(userInfo) {
    const user = {...userInfo,
        imgUrl: "../img/2.png",
        createdAt: 123543452,
        savedStoryIds: []
    }
    return storageService.post(STORAGE_KEY, user)
        .then((user) => {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
            return user
        })
}
function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja'})
// userService.login({username: 'muki', password: 'muki1'})


