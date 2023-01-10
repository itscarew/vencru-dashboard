import AppHead from '../components/Head'
import AppContext from './AppContext'
import DrawerComponent from './Drawer'
import Footer from './Footer'
import NavBar from './NavBar'
import RightNav from './RightNav'
import React, { useContext } from "react";

export default function Layout({ children }: any) {
    const { themeState }: any = useContext(AppContext)
    return (
        <>
            <AppHead />
            <div className={`text-gray-900 `}  >
                <div className={`flex min-h-screen font-body text-venru-black mx-auto font-medium text-base  `} style={{ width: "1490px" }}>
                    <NavBar />
                    <div className='flex-1 bg-venru-gray py-10 px-8 leading-none'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
