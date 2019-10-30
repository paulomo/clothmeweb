// By default, this project supports all modern browsers.
// Support for Internet Explorer 11 requires polyfills.
// For to support Internet Explorer 11, install react-app-polyfill,
// https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import 'typeface-muli';
import './react-table-defaults';
import './react-chartjs-2-defaults';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'app/App';
import Amplify from 'aws-amplify';
import awsConfig from './app/services/backendConfig/awsConfig';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: awsConfig.cognito.REGION,
      userPoolId: awsConfig.cognito.USER_POOL_ID,
      identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: awsConfig.s3.REGION,
      bucket: awsConfig.s3.BUCKET,
      identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "clothme",
          endpoint: awsConfig.apiGateway.URL,
          region: awsConfig.apiGateway.REGION
        },
      ]
    }
  });


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
