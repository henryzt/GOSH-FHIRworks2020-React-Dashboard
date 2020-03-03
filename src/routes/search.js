import React, { Component } from "react";
import PatientPage from "./patients";
import SearchForm from "../components/SearchForm";
import request from "../javascript/api";
import { Layout, message, Pagination, Row, Col, Modal } from "antd";
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
    //check if all the field is empty except blurred search checkbox
    let queryClone = Object.assign({}, query);
    delete queryClone.blurredSearch;
    const isEmpty = Object.values(queryClone).every(x => x === undefined || x === null || x === "");
    if (isEmpty) {
      Modal.warning({
        title: "Search Failed",
        content: "At least one field is required to filter results"
      });
      return;
    }
    this.setState({
      searchContent: query
    });
  };

  render() {
    return (
      <div>
        <SearchForm searchRequest={this.searchPatient}></SearchForm>
        {this.state.searchContent && <PatientPage filter={this.state.searchContent} />}
      </div>
    );
  }
}

export default SearchPage;
