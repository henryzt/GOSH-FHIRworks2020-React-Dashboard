import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientPage from "./routes/patients";
import SearchPage from "./routes/search";
import HomePage from "./routes/home";
import SideMenu from "./components/SideMenu";
import MobileTabBar from "./components/MobileTabBar";

import logo from "./img/fhir-logo-long.png";
import icon from "./img/icon.png";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

import { Layout } from "antd";
import GlobalContextConsumer from "./components/GlobalContext";

const { Header, Sider, Footer, Content } = Layout;

class DesktopMenu extends React.Component {
  state = {
    collapsed: false
  };

  updateCollapsed = collapsed => {
    this.setState({
      collapsed: collapsed
    });
  };

  render() {
    return (
      <Sider
        collapsible
        onCollapse={this.updateCollapsed}
        breakpoint="lg"
        width="230"
        style={{
          boxShadow: "7px 0px 20px -10px rgba(0,0,0,0.35)",
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}
      >
        <div
          className="logo"
          style={{
            background: `url("${this.state.collapsed ? icon : logo}") no-repeat`
          }}
        ></div>
        <SideMenu></SideMenu>
      </Sider>
    );
  }
}

const routes = [
  {
    path: "/",
    exact: true,
    title: () => "Home",
    main: () => <HomePage />
  },
  {
    path: "/patients",
    title: () => "Patients List",
    main: () => <PatientPage />
  },
  {
    path: "/search",
    title: () => "Advanced Search",
    main: () => <SearchPage />
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <Router>
        <Layout style={{ minHeight: 100 + "vh" }}>
          <GlobalContextConsumer>
            {value => {
              if (!value.isMobile) {
                return <DesktopMenu></DesktopMenu>;
              } else {
                return <MobileTabBar></MobileTabBar>;
              }
            }}
          </GlobalContextConsumer>

          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, boxShadow: "0px 6px 20px -10px rgba(0,0,0,0.05)", zIndex: 20 }}
            >
              <h2 style={{ paddingLeft: 20 + "px" }}>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.title />}
                    />
                  ))}
                </Switch>
              </h2>
            </Header>

            <RouterContent></RouterContent>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const RouterContent = () => {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Switch location={location}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={
                <div className="container">
                  <div className="page">
                    <route.main />
                    <FhirFooter></FhirFooter>
                  </div>
                </div>
              }
            />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const FhirFooter = () => {
  return <Footer style={{ textAlign: "center" }}>FHIR Dashboard ©2020 Created by henryz00</Footer>;
};

export default App;
