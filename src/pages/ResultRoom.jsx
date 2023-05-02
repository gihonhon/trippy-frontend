import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ResultRoom = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const city = searchParams.get('cityLocatioon')
    const checkin = searchParams.get('checkinDate')
    const checkout = searchParams.get('checkoutDate')
  return (
    <div>
        <h2>{city}</h2>
    </div>
  )
}

export default ResultRoom;