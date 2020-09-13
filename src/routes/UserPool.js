
import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'ap-south-1_MgflQpQfP',
    ClientId: '32pls1rrpog1rbkj7kkeumbk0q'
};

export default new CognitoUserPool(poolData);
