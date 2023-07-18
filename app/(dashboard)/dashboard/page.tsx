import Link from 'next/link';
import '../../globals.css'
import PocketBase from 'pocketbase'
import pocketbase from 'pocketbase';

export default function dashboard() {

    

    return (
        <>
            <div>

                <div className='row items-center'>
                    <h2 className='text-lg'></h2>
                </div>
                <div className='Container for stats'>
                </div>
                <div className="row row-deck row-cards"></div>
                <h1 className='font-bold text-3xl mt-8 text-white'>Get Started :</h1>
                <iframe width="100%" height="720" src="https://www.youtube.com/embed/n2cGiSamRjY" title="How to Start a Drop Shipping Business" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                

            </div>


        </>

    );
}