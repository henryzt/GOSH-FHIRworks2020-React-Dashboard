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
        <Col span={8} key={1}>
          <Form.Item name={`name`} label={`Patient Name`}>
            <Input placeholder="Enter Patient's name to filter" />
          </Form.Item>
        </Col>
        <Col span={8} key={2}>
          <Form.Item name="birth-date" label="Birthdate Range">
            <RangePicker />
          </Form.Item>
        </Col>
        <Col span={8} key={3}>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="Select a gender to filter" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={8} key={1}>
          <Form.Item name={`phone`} label={`Phone number`}>
            <Input placeholder="Enter phone number to filter" />
          </Form.Item>
        </Col>

        <Col span={8} key={2}>
          <Form.Item name={`address`} label={`Country and Address`}>
            <Input placeholder="Enter counrty code to filter" />
          </Form.Item>
        </Col>

        <Col span={8} key={2}>
          <Form.Item name={`maritalStatus`} label={`Marital Status`}>
            <Input placeholder="Enter marital status to filter" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={8} key={1}>
          <Form.Item name={`id`} label={`Patient ID`}>
            <Input placeholder="Enter Patient ID to filter" />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name={["user", "anything"]} label="Search for anything else">
            <Input.TextArea placeholder="Just type anything you would like to search, you can search for Social Security Number, Driver's License, Passport Number, Ethics etc." />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right"
          }}
        >
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
          <a
            style={{
              marginLeft: 8,
              fontSize: 12
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
