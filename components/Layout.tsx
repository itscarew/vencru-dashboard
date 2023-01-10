import AppHead from '../components/Head'
import NavBar from './NavBar'
import HeaderNavBar from './HeaderNavBar';
import React from "react";

export default function Layout({ children }: any) {
    return (
        <>
            <AppHead />
            <div className={`relative text-gray-900 `}>
                <HeaderNavBar />
                <div className={`md:flex min-h-screen font-body text-venru-black mx-auto font-medium text-base  `} >
                    <NavBar />
                    <div className='md:flex-1 w-full bg-venru-gray py-10  leading-none'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
