export default function MiniTab() {
    const routes = [
        { name: "My details" },
        { name: "Profile" },
        { name: "Password" },
        { name: "Team" },
        { name: "Plan" },
        { name: "Billing" },
        { name: "Notifications" },
        { name: "Integrations" },
        { name: "API" },
    ]

    return (
        <>
            <div className="relative w-9/12 mt-5 mb-6 rounded-lg overflow-hidden text-center divide-x divide-gray-200 sm:flex border-2 border-gray-200 cursor-pointer" >
                {routes.map((route: any) => {
                    return <div key={route.name} className={`w-full text-sm p-2 bg-white hover:bg-venru-gray  ${route.name === "Billing" && "bg-venru-gray"} `}>
                        {route.name}
                    </div>
                })}
            </div>
        </>
    )
}











