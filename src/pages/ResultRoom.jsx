import styled from '@emotion/styled'
import { Height } from '@mui/icons-material'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import platinum from '../image/platinum.jpg'


const ResultRoom = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const city = searchParams.get('cityLocatioon')
    const checkin = searchParams.get('checkinDate')
    const checkout = searchParams.get('checkoutDate')

      return (
        <div className='container flex mx-auto py-2 rounded-[12px] border-solid border-2 border-indigo-600 border-[#a9a9a9] mb-20 mt-20'>
          <div className='searchitem  border-2 rounded-xl shadow-md  rounded-lg'>
            <img src={platinum}
            alt=""
            className="siImg object-scale-down h-48 w-96 "
            />
          </div>
          <div className='siDesc flex-1 flex-col gap-50'>
            <div className='siTitle font-bold text-3xl text-[#00b5bd]'>Platinum Hotel & Convention Hall Balikpapan</div>
            <div className='siDistance text-1xl text-[#7A7C85] '>Batu Ampar - 10,1km form center</div>  
            <div className='siCancelOpSubtitle text-1xl text-[#7A7C85]'>You can cancel later, so lock in this great price today</div>
          </div>
          <div className='siDetails flex-1  w-32'>
            <div className='siRating flex'>
              <span className='flex-auto w-500 text-xl'>Excellent</span>
              <button className='text-xl'>8.9</button>
            </div>
              <div className='bsiDetailsTexts flex-1 flex-col'>
              <div className='siPrice'>Rp 870.000,00</div>
              <div className='siTaxOp'>Includes taxes and fees</div>
              <button className='siChecButton'>See availability</button>
            </div>
          </div>
        </div>
      );
    }


export default ResultRoom;