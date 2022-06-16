import React from 'react'
import Image from 'next/image';
import taj_mahal from '../assets/taj_mahal.jpg';
import sol from '../assets/sol.jpg';
import et from '../assets/et.jpg';
import gwoc from '../assets/gwoc.jpg';
import ctr from '../assets/ctr.jpg';
import petra from '../assets/petra.jpg';
import { useRouter } from 'next/router';




const Monuments = () => {
    const router = useRouter();
    return (
        <section className="text-gray-600 body-font mb-24">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">List of all Major Monuments</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Click on any of the Monument to observe the real time data collected by satellites.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4" onClick={() => { router.push("/monument") }}>
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={taj_mahal} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Taj Mahal</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">India</h1>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={sol} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Statue Of Liberty</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">United States</h1>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={gwoc} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Great Wall Of China</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">China</h1>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={et} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Eiffel Tower</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">France</h1>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={petra} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Al-Khazneh</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Jordan</h1>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <Image alt="gallery" height={50} width={200} className="absolute inset-0 w-full h-full object-cover object-center" src={ctr} />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Christ The Redeemer</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Brazil</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Monuments