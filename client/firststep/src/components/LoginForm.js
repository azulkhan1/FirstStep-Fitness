import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null); // This state will store our message

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Try to send a POST request to the server with the username and password
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // The content type should be JSON
                },
                body: JSON.stringify({ username, password }), // Send the username and password as JSON
            });

            const data = await response.json(); // Parse the JSON returned by the server

            if (response.ok) {
                // If the server responds with an 'ok' status code
                setMessage('Login successful!');
                // You might also want to perform other actions on successful login here
            } else {
                // If the server responds with an error status code
                setMessage(data.message || 'Login failed!');
            }
        } catch (error) {
            // If there is an error sending the request (like a network error)
            setMessage('Network error: Could not send login request.');
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username or Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Login</button>
            {message && <p>{message}</p>} {/* Display the message here */}
        </form>
    );
};

export default LoginForm;
