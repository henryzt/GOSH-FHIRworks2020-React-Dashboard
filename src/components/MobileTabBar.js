import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

import { HomeOutlined, TeamOutlined, SearchOutlined, BarChartOutlined } from "@ant-design/icons";

const iconNonSelectStyle = { fontSize: "22px" };
const iconSelectedStyle = { fontSize: "22px", color: "#33A3F4" };

class TabBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: false
    };
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white">
          <TabBar.Item
            title="Home"
            key="Home"
            icon={<HomeOutlined style={iconNonSelectStyle} />}
            selectedIcon={<HomeOutlined style={iconSelectedStyle} />}
            selected={this.state.selectedTab === "Home"}
            onPress={() => {
              this.setState({
                selectedTab: "Home"
              });
            }}
            data-seed="logId"
          ></TabBar.Item>

          <TabBar.Item
            title="Patients"
            key="Patients"
            icon={<TeamOutlined style={iconNonSelectStyle} />}
            selectedIcon={<TeamOutlined style={iconSelectedStyle} />}
            selected={this.state.selectedTab === "Patients"}
            onPress={() => {
              this.setState({
                selectedTab: "Patients"
              });
            }}
            data-seed="logId"
          ></TabBar.Item>

          <TabBar.Item
            title="Search"
            key="Search"
            icon={<SearchOutlined style={iconNonSelectStyle} />}
            selectedIcon={<SearchOutlined style={iconSelectedStyle} />}
            selected={this.state.selectedTab === "Search"}
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
            selected={this.state.selectedTab === "Statistics"}
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

export default TabBarMenu;
