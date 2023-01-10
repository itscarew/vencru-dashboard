import Image from "next/image"
import { HomeIcon, MessageIcon } from "../assets/svg"
import { useState } from "react"


export default function PaymentMethod() {

    const cardDetails = [
        {
            id: 1,
            title: 'Visa ending in 1234',
            title2: 'Expiry 06/2024',
            img: '/Mastercard.png',

        },
        {
            id: 2,
            title: 'Mastercard ending in 1234',
            title2: 'Expiry 06/2024',
            img: '/visa.png',
        },
    ]


    const [check, setChecked] = useState(1);

    return (
        <>
            <div className="relative my-4 text-sm" >
                <h1 style={{ fontSize: "18px" }} >Payment method</h1>
                <p className=" text-venru-darkgray font-medium pt-2 text-sm" >Update your billing details and address.</p>

                <div className="flex items-baseline mt-5 border-t-2 py-4 border-gray-200" >
                    <div className="mr-28"  >
                        <h1 >Contact email </h1>
                        <span className=" text-venru-darkgray font-medium pt-2 text-sm  " >Where should invoices be sent?</span>
                    </div>
                    <div className="flex-1" >
                        <div className="relative flex items-baseline mb-4" >
                            <input type="radio" name="1" className="absolute top-1 h-4 w-4 border-gray-300 focus:ring-2 text-venru-purple  " checked />
                            <div className="text-sm font-medium text-gray-900  ml-6">
                                <h1 >Send to my account email </h1>
                                <span className=" text-venru-darkgray font-medium pt-2 text-sm   " >olivia@untitledui.com</span>
                            </div>
                        </div>

                        <div className="relative flex items-baseline " >
                            <input type="radio" name="1" className="absolute top-1 h-4 w-4 border-gray-300 focus:ring-2 text-venru-purple" checked />
                            <div className="flex-1 text-sm font-medium text-gray-900  ml-6">
                                <h1 >Send to an alternative email</h1>
                                <div className="relative" >
                                    <input
                                        type={"text"}
                                        className="flex w-8/12 pl-10 relative items-center mt-3 text-venru-darkgray border-2  border-gray-300 bg-white font-medium p-2 text-sm  rounded-lg outline-none"
                                        placeholder="billing@untitledui.com"
                                    />
                                    <div className="absolute top-3 left-3" >
                                        <MessageIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-baseline border-t-2 py-4 border-gray-200" >
                    <div className="mr-28"  >
                        <h1 >Card details </h1>
                        <span className=" text-venru-darkgray font-medium pt-2 text-sm  " >Select default payment method.</span>
                    </div>
                    <div className="flex-1" >
                        {cardDetails.map((details) => {
                            return <div key={details.title}
                                style={{ borderWidth: "0.7px" }} className={`relative flex items-baseline mb-4 bg-white ${details.id === check && "bg-venru-gray border-venru-purple"} border-gray-300 hover:border-venru-purple rounded-lg py-3`}
                                onClick={() => {
                                    setChecked(details.id)
                                }}
                            >
                                <div className=" absolute left-4  overflow-hidden w-12 h-8 " >
                                    <Image src={details.img} alt="#" fill />
                                </div>
                                <input type="checkbox" className="absolute h-4 w-4 rounded-full right-3 top-3 text-venru-purple" checked={details.id === check} />
                                <label className={`text-sm font-medium text-gray-900  ${details.id === check && "text-venru-purple"}  ml-20`}>
                                    <h1>{details.title} </h1>
                                    <p>{details.title2} </p>
                                    <h1 className=" text-venru-purple font-medium pt-4 text-sm  " >Set as default <span className="ml-3" > Edit </span> </h1>
                                </label>
                            </div>
                        })}
                        <div className="text-gray-500 cursor-pointer" >
                            +  Add new payment method
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}











