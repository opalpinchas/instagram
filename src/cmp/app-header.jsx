import { connect } from "react-redux"
import { Component } from 'react'
import { NavLink } from "react-router-dom"
import { UserMsg } from './user-msg.jsx'
import { logout } from "../store/actions/user.action.js"




class _AppHeader extends Component {

    render() {

        return (
            <header>
               
                <div>LOGO {this.props.user.fullname}</div>
                <input type="text" placeholder="Search" />
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/">Add post</NavLink>
                    <NavLink to="/">Explore</NavLink>
                    <NavLink to="/">Profile</NavLink>
                    <NavLink to="/" onClick={this.props.logout}>Logout</NavLink>

                </nav>
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