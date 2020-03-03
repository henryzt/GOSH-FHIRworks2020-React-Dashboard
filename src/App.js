import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientPage from "./routes/patients";
import HomePage from "./routes/home";
import SideMenu from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider, Footer, Content } = Layout;

const DesktopMenu = () => {
  return <div>Example</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <Layout style={{ minHeight: 100 + "vh" }}>
          <Sider
            collapsible
            breakpoint="lg"
            width="230"
            style={{ boxShadow: "7px 0px 20px -10px rgba(0,0,0,0.35)" }}
          >
            <div className="logo">
              <h2 style={{ color: "white" }}>FHIR Dashboard</h2>
            </div>
            <SideMenu></SideMenu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, boxShadow: "0px 6px 20px -10px rgba(0,0,0,0.05)", zIndex: 20 }}
            >
              <h2 style={{ paddingLeft: 20 + "px" }}>Home</h2>
            </Header>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/patients">
                <PatientPage />
              </Route>
            </Switch>

            <Footer style={{ textAlign: "center" }}>
              FHIR Dashboard ©2020 Created by henryz00
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
