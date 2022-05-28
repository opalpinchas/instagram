import { connect } from "react-redux"
import { Routes, Route, Link } from "react-router-dom"
import routes from './routes.js'
import { HomePage } from './pages/home-page.jsx'


import { AppHeader } from "./cmp/app-header.jsx"


function _App(props) {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
        </Routes>
      </main>
    </div>
  )
}



function mapStateToProps(storeState) {
  return {

  }
}
const mapDispatchToProps = {

}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)