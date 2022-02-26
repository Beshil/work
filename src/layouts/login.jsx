import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import LoginForm from "../components/ui/loginForm";

export const Container = styled.div`
  width: 640px;
  margin: 0 auto;
  margin-top: 10%;
`;

const Login = ({ getUserEmail }) => {
  return (
    <Container>
      <LoginForm getEmail={getUserEmail} />
    </Container>
  );
};
Login.propTypes = {
  getUserEmail: PropTypes.func,
};
export default Login;
