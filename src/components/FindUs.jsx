import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-[#403F3F] text-[20px] my-5">Find Us On</h2>
            <div className="border rounded-sm">
                <div className='flex items-center p-3 border-b-2'>
                    <FaFacebookF className="border rounded-full text-blue-600 h-6 mt-1 w-6 p-1 mr-2" />
                    <p>Facebook</p>
                </div>
                <div className='flex items-center p-3 border-b-2'>
                    <FaTwitter className="border rounded-full text-[#58A7DE] h-6 mt-1 w-6 p-1 mr-2" />
                    <p>Twitter</p>
                </div>  
                <div className='flex items-center p-3'>
                    <FaInstagram className="border rounded-full text-[#D82D7E] h-6 mt-1 w-6 p-1 mr-2" />
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default FindUs;