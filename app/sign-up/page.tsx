/* eslint-disable react-hooks/rules-of-hooks */
"use client";


import {Suspense, useState} from 'react'
import {useRouter} from 'next/navigation'
import Loading from '../loading';
import '../globals.css'


import {pb} from '@/utils/pocketbase'






function SignUpForm(){
        
        const [username,setusername] = useState('');
        const [email,setemail] = useState('');
        const [passwordConfirm,setpasswordConfirm] = useState('');
        const [password,setpassword] = useState('');
        const [shop,setshop] = useState('');
        const [loading,setLoading] = useState(false)
        const [status,setStatus] = useState('')

        const router = useRouter()

        const handleLogin =async (event:any) => {
            event.preventDefault()
            setLoading(true)
            try{

                const data = {
                    username: username,
                    password: password,
                    passwordConfirm: passwordConfirm,
                    email: email,
                    shop: shop,
                }


                const result = await pb.collection('users').create(data)

                setStatus('Account has been created successfully ✅')
                router.replace('/sign-in')
                router.refresh()
            }catch(e){
                console.error(e)
                setStatus('unable to create an account 🚫')
            }

            setLoading(false)
}



    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            
            <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create An Account
              </h1>
              <div className="text-white">{status}</div>
        <form onSubmit={handleLogin}>
            <div className="mb-2">
            <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
            <input
                id ="Username"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder = "UserName"
                value = {username}
                onChange={(e) => setusername(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

            <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                type="email"
                placeholder="Email"
                value = {email}
                onChange={(e) => setemail(e.target.value)}
                required

            />
            </div>
            <div>
            <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

            <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"

                type="password"
                placeholder="Enter a Password"
                value = {password}
                onChange={(e) => setpassword(e.target.value)}
                required

            />
            </div>
            <div>
            <label htmlFor="passwordConfirm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password Confirm</label>

            <input
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                id="passwordConfirm"
                type="password"
                placeholder="Confirm Your Password"
                value = {passwordConfirm}
                onChange={(e) => setpasswordConfirm(e.target.value)}
                required

            />
            </div>
            <div>
            <label htmlFor="UserName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shop Name</label>

            <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"

                type='text'
                placeholder='Name Your Shop'
                value={shop}
                onChange={(e) => setshop(e.target.value)}
                required
            
            
            />
            
            </div>

            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                   <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                 </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
             </div>
             
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Complete Registration</button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                      Already Have An Account ? <a href="/sign-in" className="text-blue-600 hover:underline dark:text-blue-500  font-medium text-primary-600 dark:text-primary-500 focus:ring-blue-300">Sign In</a>
            </p>
        
        </form>
        
        </div>
      </div>
  </div>

    </div>

        
        </section>
        

        
    )

}

export default SignUpForm