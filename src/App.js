import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientPage from "./routes/patients";
import SideMenu from "./components/SideMenu";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider, Footer, Content } = Layout;

const DesktopMenu = () => {
  return <div>Example</div>;
};

class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: 100 + "vh" }}>
        <Sider collapsible breakpoint="lg">
          <div className="logo" />
          <SideMenu></SideMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger"
            })} */}
          </Header>

          <PatientPage></PatientPage>

          <Footer style={{ textAlign: "center" }}>FHIR Dashboard ©2020 Created by henryz00</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
