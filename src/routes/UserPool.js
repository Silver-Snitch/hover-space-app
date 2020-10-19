
import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'ap-south-1_WyRFqdj81',
    ClientId: '4e1u47o45vucr5snhtgeia9grd'
};

export default new CognitoUserPool(poolData);
