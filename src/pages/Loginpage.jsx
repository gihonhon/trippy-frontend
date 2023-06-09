import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../services/api/useLogin';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

const Loginpage = () => {
    const navigate = useNavigate();
    const { postLogin, msgError, users } = useLogin()
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

    const handleLogin = (data) => {
      postLogin(data)
    } 
    
    
  return (
    <div className='w-full flex overflow-auto max-h-[100vh] items-center flex-col justify-start'>
        
        <div className='w-full h-[100vh] flex items-end justify-start'>
            <div className='flex-[0_0_auto] w-[50%] h-full flex relative self-center items-start flex-col justify-start'>
            <img onClick={() => navigate('/')} src='/playground_assets/logo%20black.svg' alt='' loading='lazy' className='top-[27px] left-[49px] w-[100px] absolute object-cover cursor-pointer'/>
                <div className='w-[90%] h-auto m-auto flex self-center items-center flex-col justify-center'>
                    <h1 className='text-[20px] self-center my-4 py-2 font-bold'>Log in</h1>
                    <span className='text-[#7a7c85] self-center font-medium mb-8'>Get started with an account on Trippy</span>
                    <form onSubmit={handleSubmit(handleLogin)} className='gap-8 w-[50%] h-auto flex max-w-[50%] self-center mb-4 flex-col'>
                        <input {...register("username")} placeholder='Username'  className='h-[60px] border border-black rounded-[7px] p-6'/>
                        <input {...register("password")} type='password' placeholder='Password'  className='h-[60px] border border-black rounded-[7px] p-6'/>
                        <button type='submit' className='text-white w-[50%] h-[60px] self-center my-4 font-semibold rounded-[7px] bg-[#3e5cb8]'>Log in</button>
                    </form>
                        

                    
                    <div className='flex self-center my-8 items-start'>
                        <span className='self-center font-medium text-[#7a7c85]'>
                            Not a trippy member?
                        </span>
                        <span className='text-[#4893d8] self-center font-bold cursor-pointer'
                        onClick={() => navigate('/register')}
                        >{users._id}</span>
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

export default Loginpage


// {/* <div className='w-full flex overflow-auto max-h-[100vh] items-center flex-col justify-start'>
//         <div className='flex w-full h-auto items-end justify-start'>
//             {/* Left Side */}
//             <div className=' flex w-[50%] h-full relative self-center items-center flex-col justify-start'>
//                 <div className='block absolute top-[27px] left-[49px] w-[100px]'>
//                     <button className='cursor-pointer'>
//                         <img loading='lazy' src='/playground_assets/logo%20black.svg' alt=''/>
//                     </button>
//                 </div>
//                 <div className='w-[90%] h-auto m-auto flex self-center items-center flex-col justify-center'>
//                     <h1 className='text-[28px] self-center my-[16px] font-bold py-[8px] '>Log in</h1>
//                     <span className='text-[#7a7c85] self-center font-medium mb-[32px]'>Get started to travel</span>
//                     <form className='gap-[2rem] w-[50%] h-auto flex max-w-[50%] self-center mb-6 flex-col'>
//                         <div>
//                             <input className='h-[60px] cursor-auto py-2 px-4 border border-solid border-black rounded bg-transparent w-full'/>
//                         </div>
//                         <div>
//                             <input className='h-[60px] cursor-auto py-2 px-4 border border-solid border-black rounded bg-transparent w-full'/>
//                         </div>
//                         <button type='submit' className='h-[60px] text-white cursor-auto py-2 px-4 border border-solid border-black rounded bg-[#3e5cb8] w-full'>Log in</button>
//                     </form>
//                     <div className='flex self-center my-8 items-start gap-2'>
//                         <span className='text-[#7a7c85] font-medium'>Not a trippy member?</span>
//                         <span className='text-[#4893d8] font-bold cursor-pointer'>Register now</span>
//                     </div>
//                 </div>
//             </div>
//             {/* Right Side */}
//             <div className='w-[50%] h-full flex self-center items-start justify-center'>
//                 <img className='w-full h-full object-cover self-center' loading='lazy' src='/playground_assets\wp9247941-4k-indonesia-wallpapers-1500h.jpg' alt=''/>
//             </div>
//         </div>
//     </div> */}