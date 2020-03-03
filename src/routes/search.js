import React, { Component } from "react";
import PatientPage from "./patients";
import SearchForm from "../components/SearchForm";
import request from "../javascript/api";
import { Layout, message, Pagination, Row, Col } from "antd";
import "./search.css";
const { Content } = Layout;

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingData: true
    };
  }

  render() {
    return <SearchForm></SearchForm>;
  }
}

export default SearchPage;
