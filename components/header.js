import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-3xl">Overnite</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center justify-center text-xl">
                    <p
                        onClick={() => router.push("/")} className="mr-5 hover:text-gray-900">Home</p>
                    <p
                        onClick={() => router.push("/monuments")} className="mr-5 hover:text-gray-900">Monuments</p>
                </nav>
            </div>
        </header>
    )
}

export default Header