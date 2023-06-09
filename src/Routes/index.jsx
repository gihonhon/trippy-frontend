import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import NotFound from '../pages/NotFound';

const Index = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("token"))
    const user = JSON.parse(localStorage.getItem("user"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    const mitra = JSON.parse(localStorage.getItem("mitra"))

    if (pathname === "/login" || pathname === "/register"  || pathname === '/hotel' || pathname === "/") {
      return (
        <>
          <Routes>
            <Route path='/' element={ <Homepage/> } />
            <Route path='/hotel' element={<Hotelpages/>}/>
            <Route path='login' element={ <Loginpage/> } />
            <Route path='/register' element={ <Registerpage/> }/>
          </Routes>
        </>
      )
    }

    if( pathname === "/admin" ) {
      return (
        <>
        {admin & token ? 
          <Routes>
            <Route path='/admin' element={<AdminPages/>}/>
          </Routes>  :
          <Navigate to="/404" replace />
          // <Routes>
          //   <Route path='/404' element={<NotFound/>} />
          // </Routes>
      }
        </>
      )
    }

    if( pathname === "/mitra" ) {
      return (
        <>
        {mitra & token ? 
          <Routes>
            <Route path='/mitra' element={<AdminPages/>}/>
          </Routes>  :
          <Navigate to="/404" replace />
          // <Routes>
          //   <Route path='/404' element={<NotFound/>} />
          // </Routes>
      }
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
          <Route path='/404' element={<NotFound/>} />
        </Routes>
        <Foooter/>
    </>
  )
}

export default Index