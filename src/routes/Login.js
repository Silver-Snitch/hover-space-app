import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';

export default() => {

    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);
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

        authenticate(email, password)
            .then(data => {
                window.location.reload();
            })
            .catch(err => {
                console.error('Failed to login!', err);
                window.location.reload();
            })
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
                    <button type="submit" class="btn btn-primary"> Login</button>
                </form> 
                <label>To Register click <a href="/register">here</a>.</label>
            </div>
        ):(
            <div>
                You Are Logged In.<br/><button onClick={logout} type="submit" class="btn btn-primary"> Logout</button>
            </div>
            )
        }

        </div>
    );
}

