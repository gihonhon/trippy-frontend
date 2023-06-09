import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { TextField, Button, MenuItem } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import * as yup from "yup"
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineFlightClass } from 'react-icons/md'
import { BsCalendarDate, BsSearch, BsCalendar4Event, BsBookmarkCheck, BsCheckSquare } from "react-icons/bs";
import Foooter from '../components/Footer/Foooter'



const flightScehma = yup.object().shape({
    depatureCity: yup.string().required(),
    arrivalCity: yup.string().required(),
    dateDep: yup.date().required('Date is required'),
    dateArr: yup.date().required('Date is required'),
    nights: yup.number(),
    seatClass: yup.string().required(),
    numPassenger: yup.number().required()
})

const typeSeat = [
    {
      value: 'Economy',
      label: 'Economy',
    },
    {
      value: 'Premium Economy',
      label: 'Premium Economy',
    },
    {
      value: 'First Class',
      label: 'First Class',
    },
    {
      value: 'Business',
      label: 'Business',
    },
  ];

const Homepage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(flightScehma) })
    const navigate = useNavigate()

  const searchSubmit = (data) => {
    data.dateDep = dayjs(data.dateDep).format('YYYY-MM-DD')
    data.dateArr = dayjs(data.dateArr).format('YYYY-MM-DD')
    const dateStart = dayjs(data.dateDep).format('YYYY-MM-DD')
    const dateEnd = dayjs(data.arr).format('YYYY-MM-DD')
    const start = new Date(dateStart);
    const end = new Date(dateEnd);
    
    // Set both dates to the same time to compare only the dates
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    const difference = Math.abs(end - start);
    const rangeNights = Math.ceil(difference / (1000 * 60 * 60 * 24));
    console.log(rangeNights)
    data.nights = rangeNights

    navigate(`/search/flight?depDate=${data.dateDep}&arrDate=${data.dateArr}&depCity=${data.depatureCity}&arrCity=${data.arrivalCity}&seatClass=${data.seatClass}&passenger=${data.numPassenger}`)
    console.log(data)
  }

  return (
    <>
    <section className='relative sm:mb-[250px] mb-[450px]'>
        <Navbar styles="fixed bg-transparent top-0 w-full z-10 text-white"/>
        <div className='h-[75vh]'>
            <div className='bg-cover brightness-[0.85] w-full h-full absolute top-0' style={{ backgroundImage: 'url(/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg)', zIndex: "-2" }}></div>
            <div className='flex flex-col justify-center h-full items-center text-white z-10 text-center'>
                <h2 className='font-medium md:text-4xl text-2xl mb-4'>Experience Your</h2>
                <h1 className='font-bold md:text-6xl text-4xl mb-6'>Best Travel With Us</h1>
                <p className="md:text-xl text-md">We have more than 1 million happy customer arround the world</p>
            </div>
            <div className='flex justify-center'>
                <div className='border-2 rounded-xl shadow-md bg-[#fff] absolute sm:bottom-[-140px] bottom-[-400px] px-10 py-3 mx-5 lg:min-w-[800px]'>
                    <div className='flex justify-center'>
                        <form className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 my-8 px-2' onSubmit={handleSubmit(searchSubmit)}>
                            <div className='flex items-center min-w-sm'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <GiAirplaneDeparture className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Depature</h1>
                                        <Controller
                                        name='depatureCity'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                            {...field}
                                            label="Depature City"
                                            margin='dense'
                                            error={!!errors.depatureCity}
                                            helperText={errors.depatureCity?.message}
                                            />
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <GiAirplaneArrival className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Destination</h1>
                                        <Controller
                                        name='arrivalCity'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                            {...field}
                                            margin='dense'
                                            label="Arrival City"
                                            error={!!errors.arrivalCity}
                                            helperText={errors.arrivalCity?.message}
                                            />
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <BsCalendarDate className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Date of Departure</h1>
                                        <Controller
                                        name='dateDep'
                                        control={control}
                                        defaultValue={null}
                                        render={({ field: { onChange, value}, fieldState: { error } }) => (
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                value={value}
                                                onChange={onChange}
                                                format='YYYY/MM/DD'
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                textField={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <BsCalendarDate className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Date of Return</h1>
                                        <Controller
                                        name='dateArr'
                                        control={control}
                                        defaultValue={null}
                                        render={({ field: { onChange, value}, fieldState: { error } }) => (
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                value={value}
                                                onChange={onChange}
                                                format='YYYY/MM/DD'
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                textField={(params) => <TextField {...params}/>}
                                                />
                                            </LocalizationProvider>
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <MdOutlineFlightClass className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Seat Class</h1>
                                        <Controller
                                        name='seatClass'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                            {...field}
                                            margin='dense'
                                            select
                                            fullWidth
                                            label="Flight Class"
                                            defaultValue='Economy'
                                            error={!!errors.seatClass}
                                            helperText={errors.seatClass?.message}
                                            >
                                            {typeSeat.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                </MenuItem>
                                            ))}
                                            </TextField>
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='bg-[#f1f5f5] p-3 mx-2 rounded-xl'>
                                    <AiOutlineUserAdd className='text-[30px]'/>
                                </div>
                                <div className='pl-2 w-[200px]'>
                                    <div>
                                        <h1 className='text-lg font-medium'>Passenger</h1>
                                        <Controller
                                        name='numPassenger'
                                        control={control}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <TextField
                                            {...field}
                                            label="Passenger"
                                            margin='dense'
                                            type='number'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{ inputProps: { min: 1 } }}
                                            error={!!errors.numPassenger}
                                            helperText={errors.numPassenger? 'please input number' : ''}
                                            />
                                        )}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center ml-8'>
                                <Button startIcon={<BsSearch/>} size='large' variant='contained' type='submit' style={{ background: '#3E5CB8', }}>Search</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='bg-[#DCE2E5] mt-20'>
        <div className='container mx-auto py-20 px-10'>
            <div className='block sm:flex justify-between items-center mt-7 sm:text-start'>
                <h1 className='text-xl font-bold text-[#232730] leading-[60px]'>
                    Travel to make memories <br/> all round world
                </h1>
                <button className='py-4 px-6 bg-[#f1f5f5] border-2 rounded-full mt-5 sm:mt-0'>View All</button>
            </div>
            <div className="sm:grid block lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5 mt-10 justify-items-center max-w-[1300px] mx-auto">
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#3e5cb8] text-white p-10 rounded-full ">
                    <BsCalendar4Event className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">BOX & RELAX</h1>
                <p className=" mt-3">We realize ideas from simple to complex,every become easy to use</p>
              </div>
            </div>
            <div className="col-span-1 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px] my-10 sm:my-0">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#e98b6d] text-white p-10 rounded-full ">
                    <BsCheckSquare className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">SMART CHECKLIST</h1>
                <p className=" mt-3">Flight booking in your mind looking for cheap</p>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 bg-[#fff]  flex justify-center items-center text-center rounded-3xl p-10 shadow-lg max-w-[400px]">
              <div>
                <div className="flex justify-center">
                  <div className="flex justify-center bg-[#ffcea2] text-white p-10 rounded-full ">
                    <BsBookmarkCheck className="text-5xl" />
                  </div>
                </div>
                <h1 className="font-medium font-sans text-2xl mt-8">SAVE MORE</h1>
                <p className=" mt-3">Find cheap flight,travel great list ideals from over travel providers</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className="my-20">
        <div className="container mx-auto px-10">
          <h1 className="text-center text-4xl font-semibold text-[#232730] mb-12">Why Flight Ticket</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 mt-20 gap-y-20 justify-items-center">
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center max-h-[140px]">
                <img src={'/playground_assets/promotion_1.png'} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Hassle-Free</h1>
              <p className="mt-3 text-[#b4b4b7]">Make a transaction from anywhere at any time, from desktop, mobile app, or mobile web. </p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={'/playground_assets/promotion_2.png'} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Service You Can Trust</h1>
              <p className="mt-3 text-[#b4b4b7]">You get what you paid for – guaranteed.</p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={'/playground_assets/promotion_3.png'} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Various Payment Options</h1>
              <p className="mt-3 text-[#b4b4b7]">Be more flexible with various payment methods from ATM, Bank Transfer, Credit Card, and Internet Banking, to Cash.</p>
            </div>
            <div className="col-span-1 text-center max-w-[300px]">
              <div className=" flex justify-center  max-h-[140px]">
                <img src={'/playground_assets/promotion_4.png'} className="" />
              </div>
              <h1 className="text-lg font-semibold mt-10 text-[#59595b]">Secure Transaction Guaranteed</h1>
              <p className="mt-3 text-[#b4b4b7]">Security and privacy of your online transaction are protected by RapidSSL authorized technology. Receive instant confirmation and e-ticket or voucher directly in your email.</p>
            </div>
          </div>
        </div>
      </section>

      <Foooter/>
    </>
  )

  
}



export default Homepage