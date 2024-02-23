import React, { useState } from "react";

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setCredentials(prevState => ({
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
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="username or Email" />
              <input type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="password" />
             <button type="submit">Login
             </button>
        </form>
    );
}