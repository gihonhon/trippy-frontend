import React, { useState } from 'react'
import { Badge, IconButton, Menu, Typography, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton color="inherit" onClick={handleMenuOpen}>
          <NotificationsIcon />
      </IconButton>
      <Menu
        className='min-w-[800px]'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="body1">
            <span>Hello Lorem ipsum dolor sit amet.</span>
            <br></br>
            <span>Hello Lorem ipsum dolor sit amet.</span>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="body1">Notification 2</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Typography variant="body1">Notification 3</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Notification