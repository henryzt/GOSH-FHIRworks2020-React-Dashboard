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
      searchContent: null
    };
  }

  searchPatient = query => {
    console.log("received search request: ", query);
    this.setState({
      searchContent: query
    });
  };

  render() {
    return (
      <div>
        <SearchForm searchRequest={this.searchPatient}></SearchForm>
        {this.state.searchContent && <PatientPage />}
      </div>
    );
  }
}

export default SearchPage;
