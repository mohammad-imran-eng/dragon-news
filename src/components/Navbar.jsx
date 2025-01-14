import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
const Navbar = () => {
    const {currentUser,logOut} = useContext(authContext);
    const handleLogout = ()=> {
        logOut()
    }
    return (
            <div className='flex justify-between gap-3 my-5'>
            <div className="div"></div>
            <div className='nav space-x-5 text-[#706F6F]'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex space-x-2'>
                {
                    currentUser 
                    ? <div className='flex items-center'>
                        <img className='h-10 w-10 rounded-full' src={currentUser.photoURL} alt="" />
                        <p className='ml-2 font-bold'>{currentUser.displayName}</p>
                    </div> 
                    : <img src={userIcon} alt="" />
                }
                {
                    currentUser && currentUser.email? <button onClick={handleLogout} className='bg-gray-900 text-white px-5 font-semibold hover:bg-gray-800 grid items-center'>Logout</button>:<Link to='/auth/login' className='bg-gray-900 text-white px-5 font-semibold hover:bg-gray-800 grid items-center'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;