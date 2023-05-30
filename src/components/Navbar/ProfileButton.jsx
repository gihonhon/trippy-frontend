import React,{ useState } from 'react'
import Logout from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from 'react-router-dom';
import { IconButton, Avatar, Divider, Menu, MenuItem } from '@mui/material'


const ProfileButton = () => {
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
  return (
    <>
    <IconButton 
    onClick={handleClick}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    >
        <Avatar>M</Avatar>
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
        <MenuItem onClick={() => navigate('/profile')}>
            <Avatar/> Profile
        </MenuItem>
        <Divider/>
        <MenuItem onClick={() => navigate('/order')}>
            <ReceiptIcon/> <span className='ml-3'>Order</span>
        </MenuItem>
        <MenuItem>
            <Logout/> <span className='ml-3'>Log Out</span>
        </MenuItem>
    </Menu>
    </>
  )
}

export default ProfileButton