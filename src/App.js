import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PatientCard from "./PatientCard";
import SideMenu from "./SideMenu";

import { Layout } from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const patient = {
      name: "Charlie",
      job: "Janitor"
    };

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <SideMenu></SideMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: this.toggle
            })}
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
        </Layout>
      </Layout>
    );
  }
}

export default App;
