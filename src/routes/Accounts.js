    /*global chrome*/
import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from './UserPool';

const AccountContext = createContext();

const Account = props => {
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });
      console.log("local storage : ", sessionStorage.getItem('userData'))

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log('onSuccess:', data);


          var editorExtensionId = "jecfcadimgfnpmcfghicenmpfonmjach"; 
          chrome.runtime.sendMessage(editorExtensionId, {message: data.idToken.jwtToken}, function(response) {
            console.log("dsfsd"+response);
            if (!response.success)
              console.log("Failed");
          });

          
          sessionStorage.setItem('userData', data.idToken.jwtToken);
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });
  
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      var editorExtensionId = "jecfcadimgfnpmcfghicenmpfonmjach"; 
      chrome.runtime.sendMessage(editorExtensionId, {}, function(response) {
        console.log("dsfsd"+response);
        if (!response.success)
          console.log("Failed");
      });


      user.signOut();
    }
  }

  return (
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };