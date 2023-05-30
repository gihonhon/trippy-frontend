import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Notification from './Notification'
import { MdLogout } from 'react-icons/md'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import ProfileButton from './ProfileButton';



const Navbar = ({ styles }) => {
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Determine the scroll position
        const scrollPosition = window.scrollY;
  
        // Set the state based on the scroll position
        if (scrollPosition > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  return (
    <nav className={isSticky ? `fixed top-0 bg-blue-300/[0.8] w-full z-50 shadow-xl` : `${styles}`}>
        <div className='flex justify-between container mx-auto px-10 h-20 items-center'>
            <div className='flex justify-between items-center'>
                <div className='cursor-pointer w-24' onClick={() => navigate('/')}>
                    <img src='/playground_assets/logo%20black.svg' alt='logo' />
                </div>
                {/** Todo List Section For navigation */}
                <ul className='flex gap-x-5 m-0 items-center pl-10 hidden sm:flex'>
                    <li className='cursor-pointer'>
                        <a href='/' className='font-semibold text-lg'>Flight</a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href='/hotel' className='font-semibold text-lg'>Hotel</a>
                    </li>
                </ul>
            </div>
            <div>
                {!token ? (
                    <div className=''>
                        {/** Login Button */}
                        <Button variant='contained' style={{background: '#3E5CB8'}} onClick={() => navigate('/login')}>Login</Button>
                    </div>
                ) :  (
                    <div className='flex items-center'> {/** Dropdown Notification */}
                        <div className='relative'>
                            {/** Notification Component */}
                            <Notification/>
                        </div>
                        <ProfileButton/>
                    </div>
                )}
                {/** Navbar or Drawer when in phone resolution */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar