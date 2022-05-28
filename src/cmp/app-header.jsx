import { connect } from "react-redux"
import { Component } from 'react'
import { NavLink } from "react-router-dom"


class _AppHeader extends Component {

    render() {

        return (
            <header>
                <div>LOGO</div>
                <input type="text" placeholder="Search" />
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/">Add post</NavLink>
                    <NavLink to="/">Explore</NavLink>
                    <NavLink to="/">Profile</NavLink>
                </nav>
            </header>
        )
    }

}
const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
}


export const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(_AppHeader)