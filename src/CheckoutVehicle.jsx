import React, { useState } from "react";

const CheckoutVehicle = () => {
    const [vehicleId, setVehicleId] = useState("");
    const [message, setMessage] = useState("");


    const handleCheckout = async () => {
        try {
            const response = await fetch("/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id:
                vehicleId, Check_out: true })
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error checking out vehicle");
        }
    };

    return (
        <div>
            <input type="text"
            value={vehicleId}
            onChange={(e) => 
            setVehicleId(e.target.value)} />
            <button onClick={handleCheckout}>
                Checkout
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CheckoutVehicle;