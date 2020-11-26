import React, { useState, useContext, useEffect } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool'
import { AccountContext } from './Accounts';

export default () => {

    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession()
          .then(session => {
            console.log('Session:', session);
            setStatus(true);
          })
          .catch(err => {
            console.error('Failed to login!', err);
          })
      }, []);



    const onSubmit = event => {
        event.preventDefault();
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
        {!status? (
            <div>
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
        ): (
            <div>
                You Are Logged In.<br/><button onClick={logout} type="submit" class="btn btn-primary"> Logout</button>
            </div>
        )}
        </div>
    );
}

