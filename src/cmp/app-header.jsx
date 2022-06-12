import { connect } from "react-redux"
import { Component } from 'react'
import { NavLink } from "react-router-dom"
import { UserMsg } from './user-msg.jsx'
import { logout } from "../store/actions/user.action.js"




class _AppHeader extends Component {

    render() {
        const { onAddPostToggle } = this.props
        
        return (
            <header className="app-header">
                <div className="header-content">
                    <div className="logo">LOGO</div>
                    <input type="text" placeholder="Search" />
                    <nav className="header-nav">
                        <NavLink to="/home"><i className="fa-solid fa-house"></i></NavLink>
                        <i className="far fa-light fa-square-plus" onClick={onAddPostToggle}></i>
                        <NavLink to="/"><i className="far fa-light fa-compass"></i></NavLink>
                        <NavLink to="/"><i className="far fa-light fa-heart"></i></NavLink>
                        <NavLink to="/" onClick={this.props.logout}><i className="fas fa-light fa-user"></i></NavLink>
                    </nav>
                </div>
            </header>
        )
    }

}
const mapStateToProps = (storeState) => {
    return {
        user: storeState.userModule.user
    }
}
const mapDispatchToProps = {
    logout
}

export const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AppHeader)