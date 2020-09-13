import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js'

export default() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const poolData = {
        UserPoolId: 'ap-south-1_MgflQpQfP',
        ClientId: '32pls1rrpog1rbkj7kkeumbk0q'
    };

    const userPool = new CognitoUserPool(poolData);

    const onSubmit = event => {
        event.preventDefault();
        userPool.signUp(email, password, [], null, (err, data) => {
            if(err) console.log(err);
            else console.log(data);
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={email}
                onChange={event => setEmail(event.target.value)}
            />      
            <input
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button type='submit'> Login </button>
        </form>
    );
}

