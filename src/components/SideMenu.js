import React, { Component } from "react";
import { Menu } from "antd";

import { HomeOutlined, TeamOutlined, SearchOutlined, BarChartOutlined } from "@ant-design/icons";

class SideMenu extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <HomeOutlined />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <TeamOutlined />
          <span>Patient List</span>
        </Menu.Item>
        <Menu.Item key="3">
          <SearchOutlined />
          <span>Search</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span>Statistics</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SideMenu;
