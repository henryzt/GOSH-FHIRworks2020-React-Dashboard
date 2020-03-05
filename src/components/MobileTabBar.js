import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

import { HomeOutlined, TeamOutlined, SearchOutlined, BarChartOutlined } from "@ant-design/icons";

import { withRouter } from "react-router-dom";

const iconNonSelectStyle = { fontSize: "22px" };
const iconSelectedStyle = { fontSize: "22px", color: "#33A3F4" };

class TabBarMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0, zIndex: 100 }}>
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
          <TabBar.Item
            title="Home"
            key="Home"
            icon={<HomeOutlined style={iconNonSelectStyle} />}
            selectedIcon={<HomeOutlined style={iconSelectedStyle} />}
            selected={location.pathname === "/"}
            onPress={() => {
              window.location = "#/";
            }}
            data-seed="logId"
          ></TabBar.Item>

          <TabBar.Item
            title="Patients"
            key="Patients"
            icon={<TeamOutlined style={iconNonSelectStyle} />}
            selectedIcon={<TeamOutlined style={iconSelectedStyle} />}
            selected={location.pathname === "patients"}
            onPress={() => {
              window.location = "#/patients";
            }}
            data-seed="logId"
          ></TabBar.Item>

          <TabBar.Item
            title="Search"
            key="Search"
            icon={<SearchOutlined style={iconNonSelectStyle} />}
            selectedIcon={<SearchOutlined style={iconSelectedStyle} />}
            selected={location.pathname === "search"}
            onPress={() => {
              this.setState({
                selectedTab: "Search"
              });
            }}
            data-seed="logId"
          ></TabBar.Item>

          <TabBar.Item
            title="Statistics"
            key="Statistics"
            icon={<BarChartOutlined style={iconNonSelectStyle} />}
            selectedIcon={<BarChartOutlined style={iconSelectedStyle} />}
            selected={location.pathname === "statistics"}
            onPress={() => {
              this.setState({
                selectedTab: "Statistics"
              });
            }}
            data-seed="logId"
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(TabBarMenu);
