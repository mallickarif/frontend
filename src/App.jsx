import React, { useState } from "react";

import Login from "./Login";
import Logout from "./Logout";
import Dashboard from './Dashboard';
import VehicleForm from "./components/VehicleForm";
import VendorProductInfo from "./components/VendorProductInfo";


 function App () {
 

  return (
    <>
    <Login />
    <Logout />
    <Dashboard />
    <VehicleForm />
    <VendorProductInfo />
    <SecurityCheck />
    </>
  )
}
export default App;
