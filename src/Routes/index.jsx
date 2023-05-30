import React from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Foooter from '../components/Footer/Foooter';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';
import Hotelpages from '../pages/Hotelpages';
import ResultFlight from '../pages/ResultFlight';
import AdminPages from '../pages/AdminPages';
import MitraPages from '../pages/MitraPages';
import ResultRoom from '../pages/ResultRoom';
import Bookingflight from '../pages/Bookingflight';
import DetailBooking from '../pages/DetailBooking';
import ProfilePage from '../pages/ProfilePage';
import TestPage from '../pages/TestPage';

const Index = () => {
    const { pathname } = useLocation();

    if (pathname === "/login" || pathname === "/register"  || pathname === '/hotel' || pathname === "/" || pathname === '/admin' || pathname === '/mitra') {
      return (
        <>
          <Routes>
            <Route path='/' element={ <Homepage/> } />
            <Route path='/hotel' element={<Hotelpages/>}/>
            <Route path='login' element={ <Loginpage/> } />
            <Route path='/register' element={ <Registerpage/> }/>
            <Route path='/admin' element={<AdminPages/>}/>
            <Route path='/mitra' element={<MitraPages/>}/>
          </Routes>
        </>
      )
    }

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/search/flight' element={<ResultFlight/>} />
          <Route path='/search/room' element={<ResultRoom/>} />
          <Route path='/ticket/:id' element={<Bookingflight/>}/>
          <Route path='/detailbooking/flight' element={<DetailBooking/>} />
          <Route path='/user/profile' element={<ProfilePage/>} />
          <Route path='/testing' element={<TestPage/>} />
        </Routes>
        <Foooter/>
    </>
  )
}

export default Index