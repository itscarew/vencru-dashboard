import React from "react";
import { DownloadIcon } from "../assets/svg"
import TableComponent from "./table";

export default function BillingComponent() {
    return (
        <>
            <div className="w-full md:mt-0 mt-6 " >
                <div className="flex md:flex-row flex-col md:items-center md:justify-between md:px-0 px-8 " >
                    <p className="text-lg leading-none md:mb-0 mb-4" > Billing History</p>
                    <div className="flex bg-white items-center py-3 px-4 w-44 rounded-lg border-2 border-gray-300 cursor-pointer" >
                        <DownloadIcon />
                        <p className="ml-2" >Download all</p>
                    </div>
                </div>
                <TableComponent />
            </div>
        </>
    )
}









