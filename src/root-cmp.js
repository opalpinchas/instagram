import { connect } from "react-redux"
import { Routes, Route, Link } from "react-router-dom"
import routes from './routes.js'


import { AppHeader } from "./cmp/app-header.jsx"


function _App(props) {

  return (
    <div className="app">
       {props.user && <AppHeader /> } 
      <main>
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


