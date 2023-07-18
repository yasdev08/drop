'use client'
import React, { Suspense, useState } from 'react'
import { pb } from '@/utils/pocketbase'
import { useRouter, redirect } from 'next/navigation';
import Loading from '@/app/loading'
import '../globals.css'
import { login } from '@/utils/auth';

function LoginForm() {
  const [password, setPassword] = useState('')
  const [identity, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const router = useRouter()

  const Sign = async (event: any) => {
        event.preventDefault()
        setLoading(true)
        try {
          const result = await pb
            .collection('users')
            .authWithPassword(identity, password)
          console.log(result)
          await login(identity, password)
          setStatus('Logged in successfully ✅')
          router.refresh()
          router.push('/dashboard')
        } catch (e) {
          console.log(e)
          setStatus('Unable to Login 🚫')
        }
        setLoading(false)
    
  }

  return(
    <>
    <Suspense fallback={<Loading/>}/>

    <div className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login To Your Account
    </h1>
        <div className="text-white">{status}</div>
        <form  onSubmit={Sign}>
            <div className='mb-6'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

                    <input id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={identity} onChange={e =>setEmail(e.target.value)} type="text" placeholder="example@gmail.com"/>
            </div>
            <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input id="password" name="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={e =>setPassword(e.target.value)} type="password" placeholder="password"/>
            </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >Login</button>
                
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Don’t have an account yet? <a href="/sign-up" className=" text-blue-600 hover:underline dark:text-blue-500  font-medium text-primary-600 hover:underline dark:text-primary-500 focus:ring-blue-300">Sign up</a>
            </p>
        </form>
        </div>
    </div>
    </div>
    </div>
    
    </>
);
}

export default LoginForm