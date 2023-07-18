import "../../globals.css"
import PocketBase from 'pocketbase';


export default async function payment(){

    const pb = new PocketBase('http://127.0.0.1:8090');

    const payment = await pb.collection("payment").getOne("fowrnway4x4490n")


    return(
        <div>
        <div className="mt-8 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-orange-600 dark:border-gray-700 ">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Pending</h5>
                <h2 className="font-normal text-2xl text-gray-700 dark:text-white">{payment.pending} DA</h2>
            </div>
            <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-blue-600 dark:border-gray-700 ">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Available</h5>
                <h2 className="font-normal text-2xl text-gray-700 dark:text-white">{payment.available} DA</h2>
            </div>
            <div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-green-600 dark:border-gray-700 ">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Paid </h5>
                <p className="font-normal text-2xl text-gray-700 dark:text-white">{payment.paid} DA</p>
            </div>
        </div>

        <div className="mt-8 relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            NO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Invoice ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time of Payment
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Revenue
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <td className="px-6 py-4 dark:text-white">
                            <a href="/">ID00001</a>
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            23 May 2023
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            {payment.paid} DA
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            <span className="border-x-8 border-green-600 rounded bg-green-600">Paid</span>
                        </td>

                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2
                        </th>
                        <td className="px-6 py-4 dark:text-white">
                            <a href="/">INV00002</a>
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            23 May 2023
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            {payment.available} DA
                        </td>
                        <td className="px-6 py-4 dark:text-white">
                            <span className="border-x-8 border-blue-600 rounded bg-blue-600">Available</span>
                        </td>

                    </tr>

                </tbody>




            </table>



            
        </div>


        </div>
    );
}