import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const SearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
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
          <Form.Item
            name={`Name`}
            label={`Name`}
            rules={[
              {
                required: true,
                message: "Required"
              }
            ]}
          >
            <Input placeholder="placeholder" />
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
