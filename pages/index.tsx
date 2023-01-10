import React, { useState, useEffect, useContext } from "react";
import BillingComponent from "../components/Billing";

import Layout from '../components/Layout'

import MiniTab from "../components/MiniTab";
import PaymentMethod from "../components/PaymentMethod";

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl" >Settings</h1>
        <p className=" text-venru-darkgray font-normal pt-2">Manage your team and preferences here.</p>
        <MiniTab />
        <PaymentMethod />
        <BillingComponent />
      </Layout>
    </>
  )
}
