import React from "react";

export default function Logout() {
    const handleLogout = () => {
        console.log("Logging out...");
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}