import React, { useState, useContext } from 'react';
import { AccountContext } from './Accounts';

export default() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log('Logged in!', data);
            })
            .catch(err => {
                console.error('Failed to login!', err);
            })
    };

    return (
        <div class="container-sm jumbotron">
        <h1> Hover Space</h1>
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    type="email" 
                    class="form-control" 
                    id="inputEmail4" 
                    placeholder="Email"/>
            </div>
            <div class="form-group">
                <label for="inputPassword4">Password</label>
                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="password" 
                    class="form-control" 
                    id="inputPassword4" 
                    placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary"> Login</button>
        </form> 
        To Register click <a href="/register">here</a>.

        </div>
    );
}

