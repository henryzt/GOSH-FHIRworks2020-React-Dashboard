import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientCard from "./PatientCard";
import SideMenu from "./SideMenu";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider, Footer, Content } = Layout;

const DesktopMenu = () => {
  return <div>Example</div>;
};

class App extends React.Component {
  state = {
    collapsedWidth: 80
  };

  render() {
    const patient = {
      name: "Charlie",
      job: "Janitor"
    };

    return (
      <Layout style={{ minHeight: 100 + "vh" }}>
        <Sider
          collapsible
          breakpoint="lg"
          collapsedWidth={this.state.collapsedWidth}
          onBreakpoint={broken => {
            this.state.collapsedWidth = broken ? 0 : 80;
            console.log(broken);
          }}
        >
          <div className="logo" />
          <SideMenu></SideMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger"
            })} */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            <PatientCard patientData={patient}></PatientCard>
          </Content>
          <Footer style={{ textAlign: "center" }}>FHIR Dashboard ©2020 Created by henryz00</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
