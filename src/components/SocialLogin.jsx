import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold mb-3">Login with</h2>
            <div className="flex flex-col space-y-1">
                <button className="btn btn-outline btn-primary"> <FaGoogle /> Login with Google</button>
                <button className="btn btn-outline"> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;