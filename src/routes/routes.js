import PrivateRoute from "../components/PrivateRoute"
import MainLayout from "pages/layout"
import Profile from "pages/profile"
import Home from "pages/home"
import AuthLayout from "../pages/auth"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':username',
                element: <Profile />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register /> 
            }
        ]
    }
]

const authCheck = routes => routes.map((route) => {
    if(route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)