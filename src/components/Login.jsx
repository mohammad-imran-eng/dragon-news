import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {logIn} = useContext(authContext);
  const [error,setError] = useState("");
  const handleSubmit = (e)=> {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    if(!/^.{6}$/.test(password)){
      return setError("Password must be 6 characters");
    }
    logIn(email,password).then((userCredential)=>{
      setError("");
      navigate(location.state ? location.state: '/')
    }).catch(error=> setError(error.message))
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <h2 className="text-center mb-2">You don't have an account. Please <Link to='/auth/register' className="underline text-blue-600">Register</Link> 
        </h2>
        <p className="text-error text-center mb-1">{error && error}</p>
      </div>
    </div>
  );
};

export default Login;
