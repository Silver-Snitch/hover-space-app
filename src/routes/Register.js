import React, { useState } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'

export default() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();


        UserPool.signUp(email, password, [], null, (err, data) => {
			if (err) {
				console.log(err);
			}
			else {
                console.log(data)
            }
		})
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Enter Email"
            />      
            <input
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter Password"
            />
            <button type='submit'> Register </button>
        </form>
    );
}

