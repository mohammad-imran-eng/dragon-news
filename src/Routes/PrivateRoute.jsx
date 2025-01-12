import { useContext } from "react";
import { authContext } from './../Providers/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);

    const {currentUser,loading} = useContext(authContext);
    if(loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-ring loading-lg"></span></div>
    }
    if(currentUser && currentUser.email){
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login'/>
};

export default PrivateRoute;