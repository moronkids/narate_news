import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "components/layout";
// import LoadingOverlay from "react-loading-overlay";
// import styled from "styled-components";
// import { Circle, Heart } from "react-spinners-css";
// import Spinner from "react-loading-overlay/lib/components/Spinner";

export default function Logged({ component: Component, ...rest }) {
  // const { loading, loading_ } = useSelector((state) => ({
  //   loading: state.loading.loading,
  //   loading_: state.loading.loading_,
  //   // loading: true,
  // }));
  // useEffect(() => {
  //   if (loading) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // }, [loading]);

  if (!localStorage.getItem("token")) return <Redirect to="/" />;

  return (
    <>
        <Route
          {...rest}
          render={(props) => {
            return (
              <>
                <Wrapper>
                <Component {...props} />
                </Wrapper>
              </>
            );
          }}
        />
    </>
  );
}
