import React, { useState } from "react";

export default function SecurityCheck({ user }) {
    const [securityStatus, setSecurityStatus] = useState("Pending");

    const handleStatusUpdate = () => {
        setSecurityStatus("Completed");
    };

    return (
        <div>
            <h2>Security Check</h2>
            <p>Status: {securityStatus}</p>
            {user.isAdmin && (
                <button onClick={handleStatusUpdate}>Update
                Status</button>
            )}
        </div>
    );
}