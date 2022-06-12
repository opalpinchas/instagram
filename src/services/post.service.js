import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'post'

export const postService = {
    query,
    getById,
    save,
    remove
}


function query() {
    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(STORAGE_KEY)
}
function getById(postId) {
    return storageService.get(STORAGE_KEY, postId)
}
function remove(postId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, postId)
}
function save(post) {
    if (post._id) {
        return storageService.put(STORAGE_KEY, post)
    } else {
        return storageService.post(STORAGE_KEY, post)
    }
}









test()
// TEST DATA
function test() {
    storageService.post(STORAGE_KEY, {
        txt: "Best trip ever",
        imgUrl: "../img/2.png",
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
            imgUrl: "../img/2.png"
        },
        loc: {
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u105",
                    fullname: "Bob",
                    imgUrl: "../img/2.png"
                },
                txt: "good one!",
                likedBy: [
                    {
                        _id: "u105",
                        fullname: "Bob",
                        imgUrl: "../img/2.png"
                    }
                ]
            }
        ],
        likes: [
            {
                _id: "u105",
                fullname: "Bob",
                imgUrl: "../img/2.png"
            }
        ]
    }).then(x => console.log(x))


}



// const story = {
//     "_id": "s101",
//     "txt": "Best trip ever",
//     "imgUrl": "http://some-img",
//     "createdAt": 123543452,
//     "by": {
//         "_id": "u101",
//         "fullname": "Ulash Ulashi",
//         "imgUrl": "http://some-img"
//     },
//     "loc": {
//         "lat": 11.11,
//         "lng": 22.22,
//         "name": "Tel Aviv"
//     },
//     "comments": [
//         {
//             "id": "c1001",
//             "by": {
//                 "_id": "u105",
//                 "fullname": "Bob",
//                 "imgUrl": "http://some-img"
//             },
//             "txt": "good one!",
//             "likedBy": [ // Optional
//                 {
//                     "_id": "u105",
//                     "fullname": "Bob",
//                     "imgUrl": "http://some-img"
//                 }
//             ]
//         },
//         {
//             "id": "c1002",
//             "by": {
//                 "_id": "u106",
//                 "fullname": "Dob",
//                 "imgUrl": "http://some-img"
//             },
//             "txt": "not good!",
//         }
//     ],
//     "likedBy": [
//         {
//             "_id": "u105",
//             "fullname": "Bob",
//             "imgUrl": "http://some-img"
//         },
//         {
//             "_id": "u106",
//             "fullname": "Dob",
//             "imgUrl": "http://some-img"
//         }
//     ],
//     "tags": ["fun", "kids"]
// }

// const user = {
//     "_id": "u101",
//     "username": "Muko",
//     "password": "mukmuk",
//     "fullname": "Muki Muka",
//     "imgUrl": "http://some-img",
//     "createdAt": 123543452,
//     "following": [
//         {
//             "_id": "u106",
//             "fullname": "Dob",
//             "imgUrl": "http://some-img"
//         }
//     ],
//     "followers": [
//         {
//             "_id": "u105",
//             "fullname": "Bob",
//             "imgUrl": "http://some-img"
//         }
//     ],
//     "savedStoryIds": ["s104", "s111", "s123"]
// }




// txt: "Best trip ever",
// imgUrl: "http://some-img",
// by: {
//     _id: "u101",
//     fullname: "Ulash Ulashi",
//     imgUrl: "http://some-img"
// },
// loc: {
//     lat: 11.11,
//     lng: 22.22,
//     name: "Tel Aviv"
// },
// comments: [
//     {
//         id: "c1001",
//         by: {
//             _id: "u105",
//             fullname: "Bob",
//             imgUrl: "http://some-img"
//         },
//         txt: "good one!",
//         likedBy: [
//             {
//                 _id: "u105",
//                 fullname: "Bob",
//                 imgUrl: "http://some-img"
//             }
//         ]
//     }
// ]

