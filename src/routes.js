import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'

export default [
    {
        path: '/home',
        component: <HomePage />,
    },
    {
        path: '/',
        component: <LoginSignup />,
    }
]