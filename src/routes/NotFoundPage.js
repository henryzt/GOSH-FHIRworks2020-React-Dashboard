import React from "react";
import Header from "../components/Header";
import { Result, Button } from "antd";

const NotFoundPage = props => {
  return (
    <div>
      <Header title="404 Not Found"></Header>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  );
};

export default NotFoundPage;
