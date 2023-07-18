import { number, string } from "yup";
import Products from '../page';
import pocketbase from "pocketbase"

import "../../../globals.css"

async function getProducts(productId: string){
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${productId}`,
    {
      next: {revalidate: 10},
    }
    
  );


  const data = await res.json()
  return data;
}


export default async function products({params} : any){
  const product = await getProducts(params.id);
  return(

    <article className="border border-gray-800 rounded bg-gray-900 flex flex-col relative">
    <div className="flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-6">
      <img
        src = {`http://127.0.0.1:8090/api/files/h6yrddjbw772jtv/${product.id}/${product.image}`}
        width={600}
        height={600}
        alt={product.name}
        title={product.title}
        className="rounded-t-lg"
      />
    
    
    </div>
    <div className="card">
      <div className="cardbody">
        <h2 className="text-white font-bold text-4xl text-center">{product.title}</h2>
        <h4 className="fw-bold text-white mb-2 text-2xl">Description :</h4>
        <h2 className="mt-4 text-white text-xl">{product.description}</h2>
        <h4 className="mt-8 fw-bold text-white mb-2 text-2xl">Category : <span className="text-xl text-white ">{product.category}</span></h4>
        <h4 className="mt-8 fw-bold text-white mb-2 text-2xl">Price : <span className="text-2xl text-green-600 ">{product.price} DA</span></h4>
        <h4 className="mt-8 fw-bold text-white mb-2 text-2xl">Product ID : <span className="text-xl text-white ">{product.id}</span></h4>

      </div>
    </div>

    </article>

  )
}