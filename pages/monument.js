import React from 'react'
import Image from 'next/image'
import taj_mahal from '../assets/taj_mahal.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'

const Monument = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image height={575} width={500} className="object-cover object-center rounded" alt="hero" src={taj_mahal} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Taj Mahal</h1>
                    <p className="mb-8 leading-relaxed">Co-Ordinates : 27.1751° N, 78.0421° E</p>
                    <p className="mb-8 leading-relaxed">Built by : Shah Jahan</p>
                    <p className="mb-8 leading-relaxed">Built in : 1632</p>
                    <p className="mb-8 leading-relaxed">Description : The Taj Mahal is an ivory-white marble mosaic of India south-western hilltop region. It is located in the Indian subcontinent, in the province of Uttar Pradesh, 330 kilometres (200 miles) south-west of the city of Agra in the Madhya Pradesh state. It is one of the world most famous and most sacred monuments.</p>
                </div>
            </div>
            <div className='flex flex-row justify-between md:w-2/3 w-full mx-auto'>
                <div className='w-1/2'>
                    <h1 className='md:text-3xl text-lg mb-4 text-black font-bold'>Sensor Data</h1>
                    <p className="mb-8 leading-relaxed">Temperature : Average - 34°C Peak - 40°C</p>
                    <p className="mb-8 leading-relaxed">Humidity: 46% </p>
                    <p className="mb-8 leading-relaxed">Precipitation : 0%</p>
                    <p className="mb-8 leading-relaxed">Rain pH : 5.6</p>
                    <p className="mb-8 leading-relaxed">Wind Direction : East-Southeast</p>
                    <p className="mb-8 leading-relaxed">Wind Speed : 11 km/h</p>
                </div>
                <div className='w-1/2'>
                    <h1 className='md:text-3xl text-lg mb-4 text-black font-bold'>Population Data</h1>
                    <p className="mb-8 leading-relaxed">Average Visitors Everyday : 25000</p>
                    <p className="mb-8 leading-relaxed">Peak Visitors of the Year : 60000 </p>
                    <p className="mb-8 leading-relaxed">Most Visited Month : April</p>
                    <p className="mb-8 leading-relaxed">Least Visited Month : September</p>
                </div>
            </div>
            <h1 className='text-3xl mb-4 text-black font-bold md:ml-44 ml-12 mt-12'>Satellite Images from Space</h1>
            <div className='md:flex flex-row justify-around mt-12 mb-20 items-center'>
                <Image src={s1} className="mr-5" />
                <Image src={s2} className="mr-5" />
                <Image src={s3} />
            </div>


        </section>
    )
}

export default Monument