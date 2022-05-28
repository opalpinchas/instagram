import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'

import './style/main.css'
import { App } from './root-cmp'

import configureStore from './configure-store'
const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);









const post = {
  "_id": "s101",
  "txt": "Best trip ever",
  "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "Ulash Ulashi",
    "imgUrl": "http://some-img"
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  "comments": [
    {
      "id": "c1001",
      "by": {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      "txt": "good one!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        }
      ]
    },
    {
      "id": "c1002",
      "by": {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      },
      "txt": "not good!",
    }
  ],
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    },
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "tags":["fun", "kids"]
}
const user = {
  "_id": "u101",
  "username": "Muko",
  "password": "mukmuk",
  "fullname": "Muki Muka",
  "imgUrl": "http://some-img",
  "createdAt": 123543452,
  "following": [
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "followers": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    }
  ],
  "savedStoryIds": ["s104", "s111", "s123"]
}

// const story = {
//   "_id": "s101",
//   "txt": "Best trip ever",
//   "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
//   "createdAt": 123543452,
//   "by": {
//     "_id": "u101",
//     "fullname": "Ulash Ulashi",
//     "imgUrl": "http://some-img"
//   },
//   "loc": {
//     "lat": 11.11,
//     "lng": 22.22,
//     "name": "Tel Aviv"
//   },


// }
