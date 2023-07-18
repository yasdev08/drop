"use client"


import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../../../globals.css"



export default function CreateOrder(){
    const router = useRouter();

    const [name,setname] = useState('');
    const [adresse,setadresse] = useState('');
    const [phone,setphone] = useState('');
    const [shipping,setshipping] = useState('');
    const [city,setcity] = useState('');
    const [product,setproduct] = useState('');
       
    const Create=async () => {
        const response = await fetch('http://127.0.0.1:8090/api/collections/orders/records',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            adresse,
            phone,
            shipping,
            city,
            product,

        }),
    });
    setname('');
    setadresse('');
    setphone('');
    setshipping('');
    setcity('');
    setproduct('');

    const result = await response.json();  
    if(response.ok)
    {
        prompt("Your Order has been created !")
        router.push('/orders/create');
    }
        else{
            // Get the error message from api
            console.log(result.message);
        }
    }

    return(
        <div>

            <h2 className='text-white text-3xl mt-8 '>Create an Order</h2>
<h3 className='text-white text-lg mt-8'>Customer Information</h3>
<form onSubmit={Create}>
  <div className="relative z-0 w-full mb-6 group">
      <input value = {name} onChange={(e) => setname(e.target.value)} type="text" name="full_name" id="full_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input value = {adresse} onChange={(e) => setadresse(e.target.value)} type="text" name="adresse" id="adresse" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="adresse" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Customer Adresse</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input value = {phone} onChange={(e) => setphone(e.target.value)} type="tel" pattern="[0-9]{10}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <label htmlFor="shipping" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shipping Variant</label>

        <select  name="shipping" id="shipping" className="mt-6" placeholder=" " required>
            <option value="">-- Please choose an option -- </option>
            <option value = {shipping} onChange={(e) => setshipping("Home delivery")} >Home Delivery</option>
            <option value = {shipping} onChange={(e) => setshipping("stopdesk delivery")} >StopDesk Delivery</option>
        </select>
        
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input value = {city} onChange={(e) => setcity(e.target.value)}  type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City :</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input value = {product} onChange={(e) => setproduct(e.target.value)} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Id</label>
    </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create New Order</button>
</form>

</div>

    );

}