import Login from '../components/auth/LogIn';
import SingUp from "../components/auth/SignUp";

const PublicRoutes = [
    {
        path: '/login',
        name: "Login",
        component: Login,
        layout: "/auth"
    },
    {
        path: '/signup',
        name: "SignUp",
        component: SingUp,
        layout: "/auth"
    }
];

export default PublicRoutes;