import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Form, Row, Col, Input, Button, DatePicker, Select } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Option } = Select;

const SearchForm = props => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = values => {
    props.searchRequest(values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col sm={24} md={12} lg={8} className="search_inputs" key={1}>
          <Form.Item name={`name`} label={`Patient Name`}>
            <Input placeholder="Enter Patient's name to filter" />
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={8} className="search_inputs" key={2}>
          <Form.Item name="birthdate" label="Birthdate Range">
            <RangePicker />
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={8} className="search_inputs" key={3}>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select a gender to filter" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>

        {expand && (
          <React.Fragment>
            <Col sm={24} md={12} lg={8} className="search_inputs" key={4}>
              <Form.Item name={`phone`} label={`Phone number`}>
                <Input placeholder="Enter phone number to filter" />
              </Form.Item>
            </Col>

            <Col sm={24} md={12} lg={8} className="search_inputs" key={5}>
              <Form.Item name={`address`} label={`Country and Address`}>
                <Input placeholder="Enter counrty code to filter" />
              </Form.Item>
            </Col>

            <Col sm={24} md={12} lg={8} className="search_inputs" key={6}>
              <Form.Item name={`maritalStatus`} label={`Marital Status`}>
                <Input placeholder="Enter marital status to filter" />
              </Form.Item>
            </Col>

            <Col sm={24} md={12} lg={8} className="search_inputs" key={7}>
              <Form.Item name={`id`} label={`Patient ID`}>
                <Input placeholder="Enter Patient ID to filter" />
              </Form.Item>
            </Col>
            <Col sm={24} md={23} lg={16} span={16} key={8}>
              <Form.Item name={"anythingElse"} label="Search for anything else">
                <Input.TextArea placeholder="Just type anything you would like to search, you can search for Social Security Number, Driver's License, Passport Number, Ethics etc. Regular expression is supported." />
              </Form.Item>
            </Col>
          </React.Fragment>
        )}
      </Row>

      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right"
          }}
        >
          <a
            style={{
              marginRight: 12,
              fontSize: 12
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Search More
          </a>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              marginLeft: 8
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
