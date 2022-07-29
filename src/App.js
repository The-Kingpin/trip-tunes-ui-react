import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import styled from "styled-components";

import './index.css';

import MainPage from "./components/MainPage/MainPage";
import Login from "./components/login/Login";
import Register from "./components/register/Register"
import GetButton from "./components/getLocalhost/GetButton";

const AppContainer = styled.div`
  font-family: Segoe UI, Roboto, Helvetica, Times New Roman, Arial, serif;
`
const NotFountPage = () => (
    <div style={{fontSize: "25px"}}>ERROR 404!</div>
);

function App() {
    return (
        <AppContainer>
            <GetButton />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MainPage} exact/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route component={NotFountPage} />
                </Switch>
            </BrowserRouter>
        </AppContainer>
    );
}

export default App;
