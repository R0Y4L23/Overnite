import React from "react";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-4xl text-indigo-500 tracking-widest font-medium title-font mb-1">MONUMENT DETECTION</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed mt-20 text-2xl">Observe any monument from space with every form of data collected by our advanced sensors and predictions from our advanced deep learning model</p>
          </div>
          <div className="flex flex-wrap mt-16">
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Starlink</h2>
              <p className="leading-relaxed text-base mb-4">Starlink is a satellite internet constellation operated by SpaceX, providing satellite Internet access coverage to 33 countries. It aims for global coverage.SpaceX started launching Starlink satellites in 2019. As of May 2022, Starlink consists of over 2,400 mass-produced small satellites in low Earth orbit (LEO), which communicate with designated ground transceivers.</p>
              <p className="leading-relaxed text-base mb-4">We have rented a portion of Starlink to observe the monument from space on a Real Time Basis and return all vital details</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Big data</h2>
              <p className="leading-relaxed text-base mb-4">Big data is a combination of structured, semistructured and unstructured data collected by organizations that can be mined for information and used in machine learning projects, predictive modeling and other advanced analytics applications.</p>
              <p className="leading-relaxed text-base mb-4">We make the use of enormous amount of Data from Google Maps and photos from internet to get information about the current condition of landmark and observe the data over time by a deep learning algorithm to predict its future.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Our Algorithm</h2>
              <p className="leading-relaxed text-base mb-4">Our Deep Learning Algorithm is open source and is accepting valuable contribution from developers across the globe to increase its efficiency</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button
            onClick={() => router.push("/monuments")}
            className="flex mx-auto mt-24 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View All Monuments</button>
        </div>
      </section>
    </>
  )
}