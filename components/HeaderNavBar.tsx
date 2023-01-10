import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { DashboardIcon, HambugerIcon, HomeIcon, LogoIcon, LogoutIcon, ProjectsIcon, ReportIcon, SettingsIcon, SupportIcon, TaskIcon, UserIcon } from "../assets/svg/index";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Input from "./Input";

export default function HeaderNavBar({ children }: any) {
    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false)

    const handleHambuger = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setOpen(false)
    }, [router.pathname])

    const routes = [
        { name: "Home", icon: <HomeIcon />, href: "/" },
        { name: "Dashboard", icon: <DashboardIcon />, href: "#" },
        { name: "Projects", icon: <ProjectsIcon />, href: "#" },
        { name: "Tasks", icon: <TaskIcon />, href: "#" },
        { name: "Reporting", icon: <ReportIcon />, href: "#" },
        { name: "Users", icon: <UserIcon />, href: "#" },
        { name: "Support", icon: <SupportIcon />, href: "#" },
        { name: "Settings", icon: <SettingsIcon />, href: "/settings" },
    ]

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 shadow-sm  dark:bg-gray-900 block md:hidden relative ">
                <div className="flex flex-wrap items-center justify-between mx-auto px-4">
                    <Link href="/" className="flex items-center">
                        <LogoIcon />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3 "> Untitled UI  </span>
                    </Link>
                    <div className="flex md:order-2">
                        <div className="relative hidden md:block">
                            <Input />
                        </div>
                        <button onClick={handleHambuger} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <HambugerIcon />
                        </button>
                    </div>
                    <div className={`items-center overflow-y-auto h-screen justify-between ${open ? "" : "hidden"} w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
                        <div className="relative mt-3 md:hidden">
                            <Input />
                        </div>
                        {routes.map((route, index) => {
                            return (
                                <div key={index}>
                                    <Link className={`relative flex items-center py-2 my-2 rounded-lg px-2 ${route.name === "Support" && "mt-6"}  ${router.pathname == route.href ? "bg-venru-gray" : ""} `} href={route.href}>
                                        {route.icon}  <div className='ml-4'>{route.name}  </div>
                                        {(route.name === "Dashboard") && <div className="absolute right-0 bg-venru-gray rounded-full h-7 w-10 ml-2 flex items-center justify-center ">10 </div>}
                                    </Link>
                                </div>)
                        })}
                        <div className="flex items-center  border-t-2 border-gray-200 justify-between text-sm py-6 " >
                            <div className="flex items-center" >
                                <div className="relative  rounded-full overflow-hidden w-12 h-12 mr-2" >
                                    <Image src={"/Avatar-5.png"} alt="#" fill />
                                </div>
                                <div>
                                    <p>Olivia Rhye</p>
                                    <a className="font-normal" href="mailto:email@example.com">olivia@untitledui.com</a>
                                </div>
                            </div>
                            <div className=" cursor-pointer" >
                                <LogoutIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

