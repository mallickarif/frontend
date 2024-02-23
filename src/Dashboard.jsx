import React from "react";

export default function Dashboard({ username }) {
    return (
        <div>
            <h1>Welcome, { username } </h1>
            <p>This is your dashboard </p>
        </div>
    )
}