import React, { useContext } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AiOutlineHome } from "react-icons/ai";
import { CiViewList } from "react-icons/ci"
import { RiMovie2Line, RiMovie2Fill } from "react-icons/ri"
import { BiTrendingUp } from "react-icons/bi"
import { MdOutlineLocalMovies, MdOutlineDarkMode } from "react-icons/md"
import { BsLightbulb } from "react-icons/bs"
import { Switch } from "@headlessui/react";
import AppContext from "./AppContext";
import Search from "./Search";
import { DashboardIcon, HomeIcon, LogoIcon, LogoutIcon, ProjectsIcon, ReportIcon, SettingsIcon, SupportIcon, TaskIcon, UserIcon } from "../assets/svg/index";

export default function NavBar() {
    const { watchListState, themeState }: any = useContext(AppContext)
    const router = useRouter();

    const routes = [
        { name: "Home", icon: <HomeIcon />, href: "/" },
        { name: "Dashboard", icon: <DashboardIcon />, href: "#" },
        { name: "Projects", icon: <ProjectsIcon />, href: "#" },
        { name: "Tasks", icon: <TaskIcon />, href: "#" },
        { name: "Reporting", icon: <ReportIcon />, href: "#" },
        { name: "Users", icon: <UserIcon />, href: "#" },
        { name: "Support", icon: <SupportIcon />, href: "#" },
        { name: "Settings", icon: <SettingsIcon />, href: "#" },
    ]
    return (
        <nav className='w-72 py-10 border-r-2 border-gray-200 px-6'>
            <div className=' text-2xl flex items-center font-medium '  > <LogoIcon /> <h1 className='ml-3'> Untitled UI </h1></div>
            <div className="pt-6" >
                <Search />
            </div>
            <div className=' pt-2'>
                <div>
                    {routes.map((route, index) => {
                        return (
                            <div key={index}>
                                <Link className={`relative flex items-center py-2 my-2 rounded-lg px-2 ${route.name === "Support" && "mt-6"}  ${router.pathname == route.href ? "bg-venru-gray" : ""} `} href={route.href}>
                                    {route.icon}  <div className='ml-4'>{route.name}  </div>
                                    {(route.name === "Dashboard") && <div className="absolute right-0 bg-venru-gray rounded-full h-7 w-10 ml-2 flex items-center justify-center ">10 </div>}
                                </Link>
                            </div>)
                    })}
                </div>
            </div>

            <div className="my-6 relative rounded-lg px-4 py-5 bg-venru-gray text-sm w-full " >
                <p>New Features available</p>
                <p className="  font-normal" >Check out the new dashboard view. Pages now load faster. </p>
                <div className="relative w-full rounded-lg overflow-hidden my-4  " style={{ height: "136px" }}  >
                    <Image src={"/new-feature-pic.png"} alt="#" fill />
                </div>
                <Link href={"#"} >Dismiss <Link href={"#"} className="ml-4 text-venru-purple"> What’s new? </Link>  </Link>
            </div>


            <div className="flex items-center border-t-2 border-gray-200 justify-between text-sm py-6 " >
                <div className="flex items-center" >
                    <div className="relative  rounded-full overflow-hidden w-12 h-12 mr-2" >
                        <Image src={"/avatar.png"} alt="#" fill />
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

        </nav>
    )
}
