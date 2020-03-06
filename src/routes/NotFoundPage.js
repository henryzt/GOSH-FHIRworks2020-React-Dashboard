import React from "react";
import Header from "../components/Header";
import { Result, Button } from "antd";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";

const NotFoundPage = props => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch("/");

  console.log(location, match);

  //add special redirect rule for gh pages
  if (location.pathname.includes("/GOSH-FHIRworks2020-React-Dashboard") && location.hash == "") {
    history.push("/#/");
    return <div></div>;
  }

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
