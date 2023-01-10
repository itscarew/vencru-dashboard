import AppHead from '../components/Head'
import NavBar from './NavBar'
import HeaderNavBar from './HeaderNavBar';
import React from "react";

export default function Layout({ children }: any) {
    return (
        <>
            <AppHead />
            <div className={`relative text-gray-900 `}>
                <div className='fixed top-0 w-full z-10' >
                    <HeaderNavBar />
                </div>

                <div className={`md:flex py-12 md:py-0 min-h-screen font-body text-venru-black mx-auto font-medium text-base`} >
                    <NavBar />
                    <div className='md:flex-1 w-full bg-venru-gray py-10  leading-none'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
