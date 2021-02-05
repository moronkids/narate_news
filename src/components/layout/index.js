import React from "react";
import Header from "components/layout/header";
import Body from "components/layout/body";
const Index = (props) => {
  return (
    <div>
      <Header/>
      <Body>
        {props.children}
      </Body>
    </div>
  );
};

export default Index;
