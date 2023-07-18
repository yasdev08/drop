"use client";

import '../../globals.css'
import React from 'react';

import { useState, useEffect } from 'react';
import PocketBase, { ListResult } from 'pocketbase';
import { ListFormat } from 'typescript';
import app from 'next/app';
import Image from "next/image";
import Link from 'next/link';


 

async function getProducts(){
  const res = await fetch('http://127.0.0.1:8090/api/collections/products/records?page=1&perPage=30', {cache: 'no-store'})
  const data = await res.json();
  return data?.items as any[];
}





export default async function ProductsPage() {
  
  const products = await getProducts();

  return (
    <>
      <h1>Products</h1>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        
        <div key={product.id} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700" >
          
          <Link href={`/products/${product.id}`}>
          <img
            src = {`http://127.0.0.1:8090/api/files/h6yrddjbw772jtv/${product.id}/${product.image}`}
            width={318.22}
            height={250}
            alt={product.name}
            title={product.title}
            className="rounded-t-lg flex"
          />
          </Link>


          <div className='px-5 pb-5'>
          
              <a href={`/products/${product.id}`}>
                <h5 className='mt-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{product.title}</h5>
                  </a>
                  <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price} DZD</span>
            </div>
          </div>
        </div>
      ))}

      </div>
    </>
  );
};

function product({product}:any){
  const {id,title,description,price} = product || {};
  return(
    <Link href={`/products/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    
    
    
    </Link>
  )
}

