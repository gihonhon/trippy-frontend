import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Rating } from '@mui/material'
import { MdFlightClass } from 'react-icons/md'
import { TbPlaneInflight } from 'react-icons/tb'
import { IoAirplaneOutline } from "react-icons/io5";
import { RiSuitcaseLine } from 'react-icons/ri'

const ResultRoom = () => {
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const room = [
    {
        id: 1,
        hotel: 'Platinum Balikpapan Hotel & Convention Hall',
        harga: 'Rp 971.037',
        rating: 4,
        info: 'you can cancel later, so lock in this great  price today',
    },
    {
        id: 2,
        hotel: 'Novotel Balikpapan',
        harga: 'Rp 702.479',
        rating: 3,
        info: 'you can cancel later, so lock in this great  price today',

    },
    {
        id: 3,
        hotel: 'Astra Hotel Balikpapan',
        harga: 'Rp 681.578',
        rating: 3,
        info: 'you can cancel later, so lock in this great  price today',

    },
    {
        id: 4,
        hotel: 'Hotel Neo+ Balikpapan',
        harga: 'Rp 597.650',
        rating: 4,
        info: 'you can cancel later, so lock in this great  price today',

    },
    {
        id: 5,
        hotel: 'Swiss-Belhotel Balikpapan',
        harga: 'Rp 644.524',
        rating: 4,
        info: 'you can cancel later, so lock in this great  price today',

    },
    {
        id: 6,
        hotel: 'Blue Sky Hotel Balikpapan',
        harga: 'Rp 634.708',
        rating: 3,
        info: 'you can cancel later, so lock in this great  price today',

    },
  ]
  let [searchParams, setSearchParams] = useSearchParams()
  const city = searchParams.get('cityLocatioon')
  const checkin = searchParams.get('checkinDate')
  const checkout = searchParams.get('checkoutDate')
  const navigate = useNavigate()
  return (
<section className='mt-10'>
                <div className='container mx-auto py-2'>
                    {room.map((item) => {
                        return(
                            <div key={item.id} className='border-2 rounded-xl mx-8 shadow-md bg-[#fff] px-10 py-3 my-4'>
                            <div className='flex gap-8 my-2'>
                                <img className='w-[15%] h-[15%] rounded-md' src='https://loremflickr.com/640/480/city' alt=''/>
                                <div className='flex flex-col gap-y-2 w-full'>
                                  <div className='flex text-2xl font-bold justify-between'>
                                    <h1 className='text-[#0071c2] text-2xl'>{item.hotel}</h1> 
                                    <h1 className='text-xl'>{item.harga}</h1>
                                  </div>
                                  <div className='flex gap-x-1 text-[#9a9a9d]'>
                                    <p className='text-base'>subdistrict</p> | <p className='text-base'>city</p>
                                  </div>
                                  <span className='flex text-[#9a9a9d] justify-between'>
                                    <Rating value={item.rating} readOnly/> 
                                    <span className='justify-between'>includes taxes and fees</span>
                                  </span>
                                  <span className='flex gap-x-1 text-[#9a9a9d] justify-between'>
                                    <p className='text-[#008009]'>{item.info}</p>
                                    <button className='bg-slate-500 hover:bg-slate-600 rounded-lg text-white px-3 py-3 font-bold'>See availability</button>
                                  </span>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
        </section>
  )
}

export default ResultRoom;