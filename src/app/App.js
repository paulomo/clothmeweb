import "@fake-db";
import React from "react";
import { Authorization, FuseLayout, FuseTheme } from "app/Common";
import Provider from "react-redux/es/components/Provider";
import { Router } from "react-router-dom";
import jssExtend from "jss-extend";
import history from "@history";
import { Auth } from "./auth";
import store from "./store";
import AppContext from "./AppContext";
import Amplify from 'aws-amplify';
import awsConfig from './services/backendConfig/awsConfig';
import routes from "./configs/routesConfig";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById("jss-insertion-point")
});

const generateClassName = createGenerateClassName();
Amplify.configure(awsConfig);


const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
          <Auth>
            <Router history={history}>
              <Authorization>
                <FuseTheme>
                  <FuseLayout />
                </FuseTheme>
              </Authorization>
            </Router>
          </Auth>
        </Provider>
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
