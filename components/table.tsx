import Image from "next/image";
import React from "react";
import { ArrowDownIcon, CheckMarkIcon, DownloadIcon } from "../assets/svg"

export default function TableComponent() {
    const billingData = [
        {
            id: 1,
            invoice: 'Basic Plan – Dec 2022',
            amount: 'USD $10.00',
            data: "Dec 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png", "/Avatar-3.png", "/Avatar-4.png"]
        },
        {
            id: 2,
            invoice: 'Basic Plan – Nov 2022',
            amount: 'USD $10.00',
            data: "Nov 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png", "/Avatar-3.png", "/Avatar-4.png"]
        },
        {
            id: 3,
            invoice: 'Basic Plan – Oct 2022',
            amount: 'USD $10.00',
            data: "Oct 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png", "/Avatar-3.png", "/Avatar-4.png"]
        },
        {
            id: 1,
            invoice: 'Basic Plan – Aug 2022',
            amount: 'USD $10.00',
            data: "Aug 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png"]
        },
        {
            id: 4,
            invoice: 'Basic Plan – July 2022',
            amount: 'USD $10.00',
            data: "July 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png", "/Avatar-3.png"]
        },
        {
            id: 5,
            invoice: 'Basic Plan – June 2022',
            amount: 'USD $10.00',
            data: "June 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png", "/Avatar-3.png"]
        },
        {
            id: 6,
            invoice: 'Basic Plan – May 2022',
            amount: 'USD $10.00',
            data: "May 1, 2022",
            status: "Paid",
            users: ["/Avatar-5.png", "/Avatar-1.png", "/Avatar-2.png"]
        },
    ]

    return (
        <>
            <div className="md:w-full my-7" >
                <div className="relative overflow-x-auto shadow-lg  md:rounded-lg border-2 border-gray-100 ">
                    <table className="w-full text-left text-gray-500 cursor-pointer">
                        <thead className="text-xs bg-venru-gray border-b">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-search" type="checkbox" className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                                        <label htmlFor="checkbox-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal ">
                                    <span className="flex items-center">  <p className="pr-2"> Invoice  </p> <ArrowDownIcon /> </span>
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal ">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal">
                                    Users on plan
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal ">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {billingData.map((data) => {
                                return (
                                    <tr key={data.id} className="bg-white border-b whitespace-nowrap text-sm  ">
                                        <td className="w-4 p-4 hover:bg-gray-50">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-6 py-4 w-4/12 hover:bg-gray-50 font-medium text-gray-800 whitespace-nowrap ">
                                            {data.invoice}
                                        </th>
                                        <td className="px-6 py-4 hover:bg-gray-50 font-normal ">
                                            {data.amount}
                                        </td>
                                        <td className="px-6 py-4 hover:bg-gray-50 font-normal">
                                            {data.data}
                                        </td>
                                        <td className="px-6 py-4 hover:bg-gray-50 ">
                                            <span className="bg-green-100  text-green-700 rounded-full px-2 flex items-center font-normal w-16 " style={{ paddingTop: "3px", paddingBottom: "3px" }}  >
                                                <CheckMarkIcon /> <span className="ml-1" >  {data.status} </span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hover:bg-gray-50 relative">
                                            <span className="flex" >
                                                {data.users.map((user, index) => {
                                                    return <div key={index} className="relative rounded-full overflow-hidden -mr-2 " style={{ width: 32, height: 32 }}>
                                                        <Image src={user} alt="#" className="rounded-full -mr-2 " fill />
                                                    </div>
                                                })}
                                                {data.users.length > 4 && <span className=" flex items-center justify-center rounded-full -mr-2 z-10 border-2 bg-venru-gray border-white font-normal" style={{ width: 32, height: 32 }} >+1</span>}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 hover:bg-gray-50 cursor-pointer">
                                            <DownloadIcon />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}









