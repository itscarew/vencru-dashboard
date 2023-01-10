import React from "react";
import { DownloadIcon } from "../assets/svg"
import TableComponent from "./table";

export default function BillingComponent() {
    return (
        <>
            <div className="w-full" >
                <div className="flex items-center justify-between" >
                    <p className="text-lg " > Billing History</p>
                    <div className="flex bg-white items-center py-3 px-4 rounded-lg border-2 border-gray-300 cursor-pointer" >
                        <DownloadIcon />
                        <p className="ml-2" >Download all</p>
                    </div>
                </div>

                <TableComponent />
            </div>
        </>
    )
}









