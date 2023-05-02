import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registerpage = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full flex overflow-auto max-h-[100vh] items-center flex-col justify-start'>

        <div className='w-full h-[100vh] flex items-end justify-start'>
            <div className='flex-[0_0_auto] w-[50%] h-full flex relative self-center items-start flex-col justify-start'>
            <div className='top-[27px] left-[49px] w-[100px] absolute object-cover cursor-pointer' onClick={() => navigate('/')}>
            <img  src='/playground_assets/logo%20black.svg' alt='' loading='lazy' className=''/>
        </div>
                <div className='w-[90%] h-auto m-auto flex self-center items-center flex-col justify-center'>
                    <h1 className='text-[20px] self-center my-4 py-2 font-bold'>Register now</h1>
                    <span className='text-[#7a7c85] self-center font-medium mb-8'>Create your account right now</span>
                    <form className='gap-8 w-[50%] h-auto flex max-w-[50%] self-center mb-4 flex-col'>
                        <input placeholder='Fullname' className='h-[60px] border border-black rounded-[7px] p-6'/>
                        <input type='email' placeholder='Email' className='h-[60px] border border-black rounded-[7px] p-6'/>
                        <input type='password' placeholder='Password' className='h-[60px] border border-black rounded-[7px] p-6'/>
                        <input type='password' placeholder='Password' className='h-[60px] border border-black rounded-[7px] p-6'/>
                    </form>
                    <button className='text-white w-[50%] h-[60px] self-center my-4 font-semibold rounded-[7px] bg-[#3e5cb8]'>Log in</button>
                    <div className='flex self-center my-8 items-start'>
                        <span className='self-center font-medium text-[#7a7c85]'>
                            Already have an account?
                        </span>
                        <span onClick={() => navigate('/login')} className='text-[#4893d8] self-center font-bold cursor-pointer'>Login now</span>
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-full flex self-center items-start justify-center'>
                <img className='w-full h-full self-start object-cover' src='/playground_assets/wp9247941-4k-indonesia-wallpapers-1500h.jpg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Registerpage