
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import PageNotFound from "../components/error/PageNotFound"

const Public_Routes=[
    {
        path:"/",
        name:"LandingPage",
        component:LandingPage
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/signup",
        name:"Signup",
        component:Signup

    },
    // {
    //     path:"/home",
    //     name:"Home",
    //     component:HomePage

    // },
    {
        path:"*",
        name:"404 ",
        component:PageNotFound
    },
]

export default Public_Routes