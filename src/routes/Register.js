import React, { useState } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        console.log(email, password, confirmpassword)
        if(password !== confirmpassword) {
            alert("Password and Confirm Password should be same.")
            this.props.history.push('/login') 
        } else {
            UserPool.signUp(email, password, [], null, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data)
                }
            })
        }
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
            <div class="form-group">
                <label for="inputPassword5">Confirm Password</label>
                <input
                    value={confirmpassword}
                    onChange={event => setConfirmpassword(event.target.value)}
                    type="password" 
                    class="form-control" 
                    id="inputPassword5" 
                    placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary"> Register</button>
        </form> 
        To Login click <a href="/login">here</a>.

        </div>
    );
}

