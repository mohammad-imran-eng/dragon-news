import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import { updateProfile} from "firebase/auth";
import { auth } from "../firebase/firebase_init";

const Register = () => {
  const {createNewUser,updateUserProfile} = useContext(authContext);
  const [error,setError] = useState("");
  const handleSubmit =(e)=> {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(name,photo,email,password);
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    if(!/^.{6}$/.test(password)){
      return setError("Password must be 6 characters");
    }
    createNewUser(email,password)
    .then(res=>{
      console.log(res)
      updateUserProfile({displayName: name, photoURL: photo})
      .then(()=>{console.log("updated profile")}).catch(err=> console.log(err))
    })
    .catch(error=>setError(error.message))

    
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
              name="photo"
            />
          </div>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <h2 className="text-center mb-2">Already have an account? Please <Link to='/auth/login' className="underline text-blue-600">Login</Link>
        </h2>
        <p className="text-error text-center mb-1">{error && error}</p>
      </div>
    </div>
  );
};

export default Register;
