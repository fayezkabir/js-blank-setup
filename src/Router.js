import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// importing local files
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import GlobalState from "./context/globalState";

const AppWrapper = styled.div`
  /* max-width: 1170px; */
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height : 100%;
//   padding: 0 16px;
  background-color : #f1f2f6;
  display : flex;
  justify-content : space-between;
  flex-direction: column;
  box-shadow: 1px 14px 10px 2px rgb(0 0 0 / 20%);
`;

const Routing = (_) => {

    return (
        <GlobalState>
            <AppWrapper>
                <Helmet titleTemplate="%s - " defaultTitle="">
                    <meta name="description" content="" />
                </Helmet>
                {/* <Header /> */}
                <Router>
                    <Switch>
                        <Route exact component={Home} path="/" />
                    </Switch>
                </Router>
                {/* <Footer /> */}
            </AppWrapper>
        </GlobalState>
    )
}

export default Routing;