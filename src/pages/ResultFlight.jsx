import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MdFlightClass } from 'react-icons/md'
import { TbPlaneInflight } from 'react-icons/tb'
import { IoAirplaneOutline } from "react-icons/io5";
import { RiSuitcaseLine } from 'react-icons/ri'

const ResultFlight = () => {
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
    let [searchParams, setSearchParams] = useSearchParams()
    const depDate = searchParams.get('depDate')
    const arrDate = searchParams.get('arrDate')
    const depCity = searchParams.get('depCity')
    const arrCity = searchParams.get('arrCity')
    const seatClass = searchParams.get('seatClass')
    const passenger = searchParams.get('passenger')
    const navigate = useNavigate()
  return (
<section className='mt-10'>
                <div className='container mx-auto py-2'>
                    {flights.map((item) => {
                        return(
                            <div key={item.id} className='border-2 rounded-xl shadow-md bg-[#fff] px-10 py-3 my-4'>
                            <div className='flex justify-center my-2'>
                                <div className='w-full flex flex-col py-4 sm:px-0 mx-auto'>
                                            <div className='flex flex-col gap-y-8 justify-center'>
                                        <div className='flex justify-between items-center'>
                                            <span className='flex items-center text-2xl gap-2 font-semibold'>
                                                <TbPlaneInflight className='text-3xl'/> {item.plane}
                                            </span>
                                            <span className='text-2xl font-semibold'>{item.orderNum}</span>
                                            <span className='flex items-center text-2xl gap-2 font-semibold text-[#7A7C85]'>
                                                <MdFlightClass className='text-3xl text-black'/> {item.classType}
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <div className='flex flex-col items-center'>
                                                    <h1 className='font-bold text-3xl'>{item.depatureTime}</h1>
                                                    <h3 className='text-base'>{item.depatureCity}</h3>
                                                </div>
                                                <div className="lg:flex grid items-center mx-5">
                                                    <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
                                                    <IoAirplaneOutline className="mx-2 text-[#7d7d7f] text-3xl" />
                                                    <div className="max-w-[50px] xl:min-w-[100px] h-0.5 bg-[#7d7d7f] mx-auto px-10"></div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h1 className='font-bold text-3xl'>{item.arrivalTime}</h1>
                                                    <h3 className='text-base'>{item.arrivalCity}</h3>
                                                </div>
                                            </div>
                                            <h1 className='text-2xl font-bold'>{item.price}<span className='text-sm font-medium'>/pax</span></h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                        <span className='flex items-center text-2xl gap-2 font-semibold'>
                                                <RiSuitcaseLine className='text-1xl'/> {item.weight} kg
                                            </span>

                                            <button className='bg-[#3E5CB8] px-4 py-2 rounded-md text-white text-base font-medium' onClick={() => navigate(`/ticket/${item.id}`)}>Choose Flight</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
        </section>
  )
}

export default ResultFlight