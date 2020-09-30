import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../store/auth';

function LoginPage() {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    if(currentUserId) return <Redirect to="/" />


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginPage
