
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"
import LandingPage from "../pages/LandingPage"

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

    }
]

export default Public_Routes