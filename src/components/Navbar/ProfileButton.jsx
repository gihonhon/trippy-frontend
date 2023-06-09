import React,{ useState } from 'react'
import Logout from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from 'react-router-dom';
import { IconButton, Avatar, Divider, Menu, MenuItem } from '@mui/material'


const ProfileButton = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()
    const[anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e) => {
        e.preventDefault();
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }

    function stringToColor(string) {
      let hash = 0;
      let i;
    
      /* eslint-disable no-bitwise */
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
    
      let color = '#';
    
      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }
      /* eslint-enable no-bitwise */
    
      return color;
    }

    function stringAvatar(name) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }

  return (
    <>
    <IconButton 
    onClick={handleClick}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    >
        <Avatar {...stringAvatar(`${user.fullname}`)}></Avatar>
    </IconButton>
    <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    id="account-menu"
    PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
        <MenuItem onClick={() => navigate('/user/profile')}>
            <Avatar/> Profile
        </MenuItem>
        <Divider/>
        <MenuItem onClick={() => navigate('/order')}>
            <ReceiptIcon/> <span className='ml-3'>Order</span>
        </MenuItem>
        <MenuItem onClick={handleLogOut} >
            <Logout/> <spa className='ml-3'>Log Out</spa>
        </MenuItem>
    </Menu>
    </> 
  )
}

export default ProfileButton