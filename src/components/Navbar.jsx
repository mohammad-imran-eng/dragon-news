import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
            <div className='flex justify-between gap-3 my-5'>
            <div className="div"></div>
            <div className='nav space-x-5 text-[#706F6F]'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex space-x-2'>
                <img src={userIcon} alt="" />
                <Link to='/auth/login' className='bg-gray-900 text-white px-5 font-semibold hover:bg-gray-800 grid items-center'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;