import React, { Component } from "react";
import { Menu } from "antd";

import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { HomeOutlined, TeamOutlined, SearchOutlined, BarChartOutlined } from "@ant-design/icons";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <NavLink to="/" />
        </Menu.Item>
        <Menu.Item key="/patients">
          <TeamOutlined />
          <span>Patient List</span>
          <NavLink to="/patients" />
        </Menu.Item>
        <Menu.Item key="/search">
          <SearchOutlined />
          <span>Search</span>
          <NavLink to="/search" />
        </Menu.Item>
        <Menu.Item key="/statistics">
          <BarChartOutlined />
          <span>Statistics</span>
          <NavLink to="/statistics" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(SideMenu);
