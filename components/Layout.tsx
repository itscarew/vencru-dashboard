import AppHead from '../components/Head'
import NavBar from './NavBar'
import React from "react";

export default function Layout({ children }: any) {
    return (
        <>
            <AppHead />
            <div className={`text-gray-900 `}  >
                <div className={`flex min-h-screen font-body text-venru-black mx-auto font-medium text-base  `} >
                    <NavBar />
                    <div className='flex-1 bg-venru-gray py-10 px-8 leading-none'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
