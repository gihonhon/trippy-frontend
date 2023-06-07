import React, { useState } from 'react'
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import { Avatar, Divider, Tab, Tabs, Box, TextField, MenuItem } from '@mui/material'
import PropTypes from 'prop-types';
import { FiUser, FiLogOut } from "react-icons/fi";
import { SiFloatplane } from 'react-icons/si'
import { BsCalendar2Check, BsCardList, BsPencilSquare } from "react-icons/bs";
import { BiWalletAlt, BiCheck } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {} from 'react-icons'

const profileSchema = yup.object().shape({
    fullName: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.date().required(),
    phone: yup.string().required(),
})

const genderSelecet = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        className='mx-4 w-[80%] border'
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
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

const ProfilePage = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(profileSchema) })
    const [profileEdit, setProfileEdit] = useState(false)
    const updateProfile = (data) => {
      setProfileEdit(!profileEdit)
      console.log(data)
    }

    return (
    <>
    <div className='min-h-screen pb-20'>
        <div className='container mx-auto px-10'>
        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ border: 1, borderColor: 'divider', maxHeight:'24vh' }}
        >
          <Tab icon={<FiUser/>} iconPosition="start" label="Profile" {...a11yProps(0)} />
          <Divider/>
          <Tab icon={<BiWalletAlt/>} iconPosition='start' label="E-Wallet" {...a11yProps(2)} />
          <Divider/>
          <Tab icon={<BsCardList/>} iconPosition='start' label="Orders" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <Avatar {...stringAvatar('User Test')} sx={{width:'120px', height:'120px', fontSize:'60px'}} />
                    <button onClick={() => setProfileEdit(!profileEdit)} className={`${profileEdit ? 'hidden' : 'border font-medium hover:bg-blue-500 hover:text-white inline-flex items-center rounded-md my-4 p-[12px_14px]'}`}>
                        <BsPencilSquare className='mr-2'/> Edit Profile
                    </button>
                </div>
                <div className='my-8 mx-8'>
                    <form>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-12'>
                            {profileEdit ? 
                                <>
                                <div className='mx-2'>
                                  <h1>Fullname</h1>
                                  <Controller
                                  name='fullName'
                                  control={control}
                                  defaultValue='User Test'
                                  render={({ field }) => (
                                      <TextField
                                      {...field}
                                      margin='dense'
                                      variant="standard"
                                      fullWidth
                                      error={!!errors.fullName}
                                      helperText={errors.fullName?.message}
                                      />
                                  )}
                                  />
                                </div>
                            
                                <div className='mx-2'>
                                  <h1>Gender</h1>
                                  <Controller
                                  name='gender'
                                  control={control}
                                  defaultValue='Female'
                                  render={({ field }) => (
                                    <TextField
                                    {...field}
                                    margin='dense'
                                    select
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.gender}
                                    helperText={errors.gender?.message}
                                    >
                                      {genderSelecet.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                    )}
                                  />
                                </div>

                            <div className='mx-2'>
                                <h1>Email Address</h1>
                                <Controller
                                name='email'
                                control={control}
                                defaultValue='usertest@gmail.com'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    />
                                )}
                                />
                            </div>

                            <div className='mx-2'>
                                <h1>Birth Dates</h1>
                                <Controller
                                name='birthDate'
                                control={control}
                                defaultValue={null}
                                render={({ field: { onChange, defValue}, fieldState: { error } }) => (
                                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                                      <DatePicker
                                      value={defValue}
                                      onChange={onChange}
                                      format='DD/MM/YYYY'
                                      error={!!error}
                                      helperText={error ? error.message : null}
                                      textField={(params) => <TextField {...params} />}
                                      />
                                  </LocalizationProvider>
                              )}
                                />
                            </div>

                            <div className='mx-2'>
                                <h1>Phone Number</h1>
                                <Controller
                                name='phone'
                                control={control}
                                defaultValue='812789456123'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                    />
                                )}
                                />
                            </div>
                                </>
                            :
                                <>
                                <div className='mx-2'>
                                <h1>Fullname</h1>
                                <Controller
                                name='fullName'
                                control={control}
                                defaultValue='User Test'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    disabled
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.fullName}
                                    helperText={errors.fullName?.message}
                                    />
                                )}
                                />
                            </div>
                            
                            <div className='mx-2'>
                                <h1>Gender</h1>
                                <Controller
                                name='gender'
                                control={control}
                                defaultValue='Female'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    disabled
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.gender}
                                    helperText={errors.gender?.message}
                                    />
                                )}
                                />
                            </div>

                            <div className='mx-2'>
                                <h1>Email Address</h1>
                                <Controller
                                name='email'
                                control={control}
                                defaultValue='usertest@gmail.com'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    disabled
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    />
                                )}
                                />
                            </div>

                            <div className='mx-2'>
                                <h1>Birth Date</h1>
                                <Controller
                                name='birthDate'
                                control={control}
                                defaultValue='01/01/2002'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    disabled
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.birthDate}
                                    helperText={errors.birthDate?.message}
                                    />
                                )}
                                />
                            </div>

                            <div className='mx-2'>
                                <h1>Phone Number</h1>
                                <Controller
                                name='phone'
                                control={control}
                                defaultValue='812789456123'
                                render={({ field }) => (
                                    <TextField
                                    {...field}
                                    disabled
                                    margin='dense'
                                    variant="standard"
                                    fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                    />
                                )}
                                />
                            </div>
                                </>
                            }
                            
                        </div>
                        <div className={`${profileEdit ? 'flex justify-center gap-8 mt-12 mx-4' : 'hidden'}`}>
                          <button type='submit' onClick={handleSubmit(updateProfile)} className='inline-flex rounded-md hover:bg-green-500 hover:text-white gap-2 text-lg items-center border p-[8px_18px]'>
                            <AiOutlineCheck />Edit
                          </button>
                          <button onClick={() => setProfileEdit(!profileEdit)} className='inline-flex rounded-md hover:bg-red-500 hover:text-white gap-2 text-lg items-center border p-[8px_18px]'>
                            <AiOutlineClose />Close
                          </button>
                        </div>
                    </form>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center'>
              <div className='bg-[#ccc] h-[378px] w-[595px] rounded-[15px]'>
                <div style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230d1838' points='1600%2C160 0%2C460 0%2C350 1600%2C50'/%3E%3Cpolygon fill='%230e315d' points='1600%2C260 0%2C560 0%2C450 1600%2C150'/%3E%3Cpolygon fill='%230f4981' points='1600%2C360 0%2C660 0%2C550 1600%2C250'/%3E%3Cpolygon fill='%231062a6' points='1600%2C460 0%2C760 0%2C650 1600%2C350'/%3E%3Cpolygon fill='%23117aca' points='1600%2C800 0%2C800 0%2C750 1600%2C450'/%3E%3C/g%3E%3C/svg%3E")` }} 
                className='bg-[#0c0014] bg-[auto_147%] bg-center relative h-full w-full rounded-[13px] p-[20px_40px] text-[#fff]'>
                  <h1 className='inline-flex text-white font-semibold italic text-4xl'>
                    <SiFloatplane/>
                    Trippy</h1>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        
  <div>
    <h1 class="text-2xl font-bold mb-4">History Order</h1>

    <table class="min-w-full bg-white border-collapse border border-slate-400"> 
      <thead>
        <tr>
          <th class="border border-slate-400 py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase">No</th>
          <th class="border border-slate-400 py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase">ID</th>
          <th class="border border-slate-400 py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase">Tanggal Pesan</th>
          <th class="border border-slate-400 py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase">Nama Pemesan</th>
          <th class="border border-slate-400 py-2 px-4 bg-gray-200 text-gray-700 font-bold uppercase">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class='no border border-slate-400'></td>
          <td class='id border border-slate-400'></td>
          <td class='tanggal-pesan border border-slate-400'></td>
          <td class='nama-pemesan border border-slate-400'></td>
          <td class='status border border-slate-400'></td>

        </tr>
      </tbody>
    </table>
  </div>
          {/* <table className='TableHead'>
            <thead>
              <tr>
              <th>No</th>
              <th>Id Order</th>
              <th>Tanggal Pemesanan</th>
              <th>Nama Pemesan</th>
              <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            </tbody>

          </table> */}
        </TabPanel>
      </Box>
        </div>
    
    </div>
    
    </>
    // <div className="min-h-screen pb-20">
    //   <div className="container mx-auto px-10 lg:grid grid-cols-4 block mt-20 gap-x-10">
    //     <aside className="col-span-1 flex flex-col gap-y-4 mb-5">
        
    //     </aside>

    //   </div>
    // </div>
  )
}





export default ProfilePage