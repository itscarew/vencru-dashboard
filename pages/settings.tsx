import React from "react";
import BillingComponent from "../components/Billing";
import Layout from '../components/Layout'
import MiniTab from "../components/MiniTab";
import PaymentMethod from "../components/PaymentMethod";

export default function Settings() {
    return (
        <>
            <Layout>
                <div className="px-8" >
                    <h1 className="text-3xl" >Settings</h1>
                    <p className=" text-venru-darkgray font-normal pt-2">Manage your team and preferences here.</p>
                </div>
                <div className="md:px-8" ><MiniTab /></div>
                <div className="px-8" ><PaymentMethod /></div>
                <div className="md:px-8" ><BillingComponent /></div>
            </Layout>
        </>
    )
}
