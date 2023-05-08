import React, { useEffect } from 'react'
import { BsArrowRight, BsCircle, BsClock } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiRollingSuitcase } from "react-icons/ci";
import { BiCabinet } from "react-icons/bi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const DetailBooking = () => {
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams()
    const depTime = searchParams.get('depTime')
    const arrTime = searchParams.get('arrTime')
    const depCity = searchParams.get('depCity')
    const airlines = searchParams.get('airlines')
    const arrCity = searchParams.get('arrCity')
    const seatClass = searchParams.get('seatClass')
    const ordernumber = searchParams.get('orderNumber')
    const price = searchParams.get('price')
    const cabin = searchParams.get('cabin')
  return (
    <div>
      <div className="container mx-auto py-10 px-10 min-h-screen">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8">
          <div className="col-span-2 bg-[#f1f5f5]  px-8 pb-8  rounded-md">
            <div className="flex  justify-between items-center ">
              <div>
                <p className="mt-8 text-gray-400 text-base">Departure Flight - <span>{ordernumber}</span></p>
                <h6 className="flex items-center">
                  {depCity} <BsArrowRight className="mx-5 my-3" /> {arrCity}
                </h6>
                <p className="text-gray-400 text-sm">1 Pax | Direct</p>
              </div>
              
            </div>
            <hr className="my-4" />
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-4">
              <div>
                <p>
                  {airlines} - {seatClass}
                </p>
              </div>
              <div className="col-span-2 flex">
                <div className="pb-10">
                  <BsCircle />
                  <div className="w-0.5 h-full bg-[#c4c4c4] mx-auto"></div>
                  <BsCircle />
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1 flex flex-col justify-between ml-2">
                    <div>
                      <p>{depTime}</p>
                      <p className="text-gray-400 text-sm ">24 Nov 2022</p>
                    </div>
                    <div>
                      <p className="flex items-center text-gray-400 text-sm py-10">
                        <BsClock className="mr-2" />
                        00 H 00 m
                      </p>
                    </div>
                    <div>
                      <p>{arrTime}</p>
                      <p className="text-gray-400 text-sm">25 Nov 2022</p>
                    </div>
                  </div>
                  <div className="col-span-2 pl-10 flex flex-col justify-between">
                    <div>
                      <h6>{depCity} </h6>
                      <p className="text-gray-400 text-sm">
                        AirportName Terminal
                      </p>
                    </div>
                    <div className="">
                      <h6>{arrCity} </h6>
                      <p className="text-gray-400 text-sm">
                        AirportName Terminal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="text-gray-400 text-sm">
                  <li className="flex items-center">
                    <BiCabinet className="mr-3 text-base" />
                    Cabin Baggage 7kg
                  </li>
                  <li className="flex items-center my-1">
                    <CiRollingSuitcase className="mr-3 text-base" />
                    Baggage 20kg
                  </li>
                  <li className="flex items-center">
                    <IoGameControllerOutline className="mr-3 text-base" />
                    Entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:ml-5 lg:col-span-1 col-span-2">
            <div className="bg-[#f1f5f5] p-4 rounded-md ">
              <h1 className="font-medium text-xl mt-4">Total Price</h1>
              <div className="flex justify-between py-3  font-medium">
                <p>
                  Depart ( {depCity} to {arrCity} )
                </p>
                <p>
                  {(price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <button className="bg-[#3e5cb8] w-full text-white p-4 rounded-md font-semibold" onClick={() => navigate('/')}>
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailBooking