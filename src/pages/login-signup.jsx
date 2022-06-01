import { connect } from "react-redux"
import { Component } from 'react'
import { login, signup } from "../store/actions/user.action.js"


 class _LoginSignup extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
            fullname: ''
        },
        isSignup: false
    }


    componentDidMount () {

        if(this.props.user){
            console.log('innn');
            window.history.pushState({}, undefined, "/home");
        }
    }

    clearState = () => {
        const clearTemplate = {
            credentials: {
                username: '',
                password: '',
                fullname: ''
            },
            isSignup: false
        }
        this.setState({ clearTemplate })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ credentials: { ...this.state.credentials, [field]: value } });
    }

    onLogin = (ev = null) => {
        if (ev) ev.preventDefault()
        if (!this.state.credentials.username || !this.state.credentials.password) return
        this.props.login(this.state.credentials)
        this.clearState()
    }

    onSignup = (ev = null) => {
        if (!this.state.credentials.username || !this.state.credentials.password || !this.state.credentials.fullname) return
        if (ev) ev.preventDefault()
        this.props.signup(this.state.credentials)
        this.clearState()
    }

    toggleSignup = () => {
        this.setState({ isSignup: !this.state.isSignup })
    }


    render() {
        const { username, password, fullname } = this.state.credentials;
        const { isSignup } = this.state;
        const { heading } = this.props;
        return (
            <div className="login-page">
                <h4>{heading}</h4>
                <p>
                    <a href="#" onClick={this.toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</a>
                </p>
                {!isSignup && <form className="login-form" onSubmit={this.onLogin}>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <button>Login!</button>
                </form>}

                <div className="signup-section">
                    {isSignup && <form className="signup-form" onSubmit={this.onSignup}>
                        <input
                            type="text"
                            name="fullname"
                            value={fullname}
                            placeholder="Fullname"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                            required
                        />
                        <button >Signup!</button>
                    </form>}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
    return {
        user: storeState.userModule.user
    }
}
const mapDispatchToProps = {
    signup,
    login
}



export const LoginSignup = connect(
    mapStateToProps,
    mapDispatchToProps
)(_LoginSignup)


