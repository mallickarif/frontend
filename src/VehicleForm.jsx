import React, { useState } from "react";

export default function VehicleForm() {
       const [vehicleInfo, setVehicleInfo] = useState({
        dcNumber: "",
        poNumber: "",
       });


       const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicleInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
       };

       const handleSubmit = (e) => {
        e.preventDefault();
       };


       return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="dcNumber"
            value={vehicleInfo.dcNumber}
            onChange={handleChange} />
            <input type="text"
            name="poNumber"
            value={vehicleInfo.poNumber}
            onChange={handleChange} />
            <button type="submit">Submit
            </button>
        </form>
       )
}