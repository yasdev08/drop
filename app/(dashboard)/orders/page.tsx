
import "../../globals.css"
import Link from 'next/link';


async function getOrders(){


    const res = await fetch('http://127.0.0.1:8090/api/collections/orders/records?page=1&perPage=30', {cache: 'no-store'})
    const data = await res.json();
    return data?.items as any[];
  }



export default async function orders(){
    const orders  = await getOrders()
    
    return(
        <>
      <div>


      <div className="mt-8">
      <div className="text-gray-300 flex text-sm">
      Order </div>
      <h2 className="text-white text-2xl">
      List Order </h2>
      </div>
      <button type="button" className=" text-white bg-gradient-to-r mt-8 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><Link href="/orders/create">Create an Order +</Link></button>

      <div>

      <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Adresse
                </th>
                <th scope="col" className="px-6 py-3">
                    City
                </th>
                <th scope="col" className="px-6 py-3">
                    Product ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>

            
            
            {orders.map((order) => (
                
                <tr key ={order.id} className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.name}
                </th>
                <td className="px-6 py-4">
                    {order.adresse}
                </td>
                <td className="px-6 py-4">
                    {order.city}
                </td>
                <td className="px-6 py-4">
                    {order.product}
                </td>

                <td className="px-6 py-4">
                    {order.phone}
                </td>
                
                <td className="px-6 py-4">
                    {order.created}
                </td>
                </tr>


            ))
            
            
            
            
            
            
            }           
           
                
            
        </tbody>
    </table>
    </div>
      </div>
      </div>
      </>

    )
}