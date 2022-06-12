import { connect } from "react-redux"
import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

import routes from './routes.js'


import { AppHeader } from "./cmp/app-header.jsx"
import { AddPost } from './cmp/add-post.jsx'


function _App(props) {

  const [isOnAddPost, setOnAddPost] = useState(false)

  const onAddPostToggle = () => {
    setOnAddPost(!isOnAddPost)
  }

  return (
    <div className="app">
      {props.user && <AppHeader onAddPostToggle={onAddPostToggle} />}
      <main>
        {isOnAddPost && <AddPost user={props.user} onAddPostToggle={onAddPostToggle} />}
        <Routes>
          {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
        </Routes>
      </main>
    </div>
  )
}



const mapStateToProps = (storeState) => {
  return {
    user: storeState.userModule.user
  }
}


export const App = connect(
  mapStateToProps
)(_App)


