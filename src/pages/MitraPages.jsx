import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import BedIcon from '@mui/icons-material/Bed';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const MitraPages = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
        <nav>
        <div className='flex justify-between container mx-auto px-10 h-20 items-center'>
            <div className='flex justify-between items-center'>
                <div className='cursor-pointer w-24' onClick={() => navigate('/')}>
                    <img src='/playground_assets/logo%20black.svg' alt='logo' />
                </div>
                {/** Todo List Section For navigation */}
                <h1 className='font-semibold text-2xl mx-8'>Dashboard - Mitra</h1>
            </div>
            <div>
            <Button variant='contained' color='error' onClick={() => navigate('/')}>Log out</Button>
            </div>
        </div>
    </nav>
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh', borderTop: '1px solid grey' }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab icon={<AccountBalanceWalletIcon/>} iconPosition='start' label="Wallet" {...a11yProps(0)} />
          <Tab icon={<AirplaneTicketIcon/>} iconPosition='start' label="Flight" {...a11yProps(1)} />
          <Tab icon={<BedIcon/>} iconPosition='start' label="Rooms" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
        </>
      
      
    );
}

export default MitraPages