import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SignupForm = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    // Add more state hooks if you want to collect more information

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const signupResponse = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, username, password, age }),
            });
    
            const signupData = await signupResponse.json();
            if (signupResponse.ok) {
                // If signup is successful, attempt to automatically log the user in
                const loginResponse = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
    
                const loginData = await loginResponse.json();
                if (loginResponse.ok) {
                    // Successful login, handle redirection or token storage here
                    navigate('/');
                } else {
                    // If automatic login fails, redirect to the login page
                    navigate('/login');
                }
            } else {
                // Signup failed, handle error here
                setMessage(signupData.message || 'Signup failed!');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            setMessage('Network error: Could not perform the operation.');
            console.error('Error:', error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
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
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;

