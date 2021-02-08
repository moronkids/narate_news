import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import Wrapper from "components/layout";
import { Route } from "react-router-dom";
// import LoadingOverlay from "react-loading-overlay";
// import styled from "styled-components";

export default function Guest({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          // <StyledLoader
          //   active={loading}
          //   spinner
          //   text="Please wait, we still fetching your request..."
          // >
          <Wrapper>
            <Component {...props} />

          </Wrapper>
          //  </StyledLoader>
        );
      }}
    />
  );
}
