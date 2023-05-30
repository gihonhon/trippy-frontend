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
    

    let [searchParams, setSearchParams] = useSearchParams()
    const city = searchParams.get('cityLocatioon')
    const checkin = searchParams.get('checkinDate')
    const checkout = searchParams.get('checkoutDate')
    const navigate = useNavigate()
  return (
<section className='mt-10'>
                <div className='container mx-auto py-2'>
                    {flights.map((item) => {
                        return(
                            <div key={item.id} className='border-2 rounded-xl mx-8 shadow-md bg-[#fff] px-10 py-3 my-4'>
                            <div className='flex gap-8 my-2'>
                                <img className='w-[20%] h-[20%] rounded-md' src='https://loremflickr.com/640/480/city' alt=''/>
                                <div className='flex flex-col gap-y-2 w-full'>
                                  <div className='flex text-2xl font-bold justify-between'>
                                    <h1>Tanah Abang</h1>
                                    <h1>Rp 200.000</h1>
                                  </div>
                                  <div className='flex'>
                                    <Rating value={4} readOnly/>
                                  </div>
                                  <span className='flex gap-x-1 text-[#9a9a9d]'>
                                    <p>subdistrict</p> | <p>city</p>
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

const flights = [
  {
      id: 1,
      plane: 'Garuda Indonesia',
      orderNum: 24508,
      classType: 'Economy Class',
      depatureCity: 'Jakarta',
      depatureTime: '11:00',
      arrivalCity: 'Aceh',
      arrivalTime: '13:00',
      price: '2.200.000,00',
      weight: 25,
  },
  {
      id: 2,
      plane: 'Lion Air',
      orderNum: 24509,
      classType: 'Economy Class',
      depatureCity: 'Jakarta',
      depatureTime: '11:00',
      arrivalCity: 'Medan',
      arrivalTime: '12:00',
      price: '1.800.000,00',
      weight: 25,
  },
  {
      id: 3,
      plane: 'Batik Air',
      orderNum: 24510,
      classType: 'Economy Class',
      depatureCity: 'Jakarta',
      depatureTime: '11:00',
      arrivalCity: 'Balikpapan',
      arrivalTime: '12:00',
      price: '1.000.000,00',
      weight: 25,
  },
  {
      id: 4,
      plane: 'Garuda Indonesia',
      orderNum: 24511,
      classType: 'Economy Class',
      depatureCity: 'Medan',
      depatureTime: '09:00',
      arrivalCity: 'Bali',
      arrivalTime: '12:00',
      price: '2.800.000,00',
      weight: 25,
  },
  {
      id: 5,
      plane: 'Citilink',
      orderNum: 24512,
      classType: 'Economy Class',
      depatureCity: 'Bali',
      depatureTime: '13:00',
      arrivalCity: 'Samarinda',
      arrivalTime: '15:10',
      price: '1.900.000,00',
      weight: 25,
  },
  {
      id: 6,
      plane: 'Lion Air',
      orderNum: 24513,
      classType: 'Economy Class',
      depatureCity: 'Aceh',
      depatureTime: '08:00',
      arrivalCity: 'Balikpapan',
      arrivalTime: '11:00',
      price: '2.700.000,00',
      weight: 25,
  },
]