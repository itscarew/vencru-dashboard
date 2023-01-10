import { useState } from "react"


export default function MiniTab() {

    const [check, setChecked] = useState(6);
    const routes = [
        { id: 1, name: "My details" },
        { id: 2, name: "Profile" },
        { id: 3, name: "Password" },
        { id: 4, name: "Team" },
        { id: 5, name: "Plan" },
        { id: 6, name: "Billing" },
        { id: 7, name: "Notifications" },
        { id: 8, name: "Integrations" },
        { id: 9, name: "API" },
    ]

    return (
        <>
            <div className="relative w-9/12 mt-5 mb-6 rounded-lg overflow-hidden text-center divide-x divide-gray-200 sm:flex border-2 border-gray-200 cursor-pointer" >
                {routes.map((route: any) => {
                    return <div key={route.name} className={`w-full whitespace-nowrap text-sm p-2 bg-white hover:bg-venru-gray ${route.id === check && "bg-venru-gray"}  `}
                        onClick={() => {
                            setChecked(route.id)
                        }}
                    >
                        {route.name}
                    </div>
                })}
            </div>
        </>
    )
}











