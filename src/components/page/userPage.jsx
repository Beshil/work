import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 60px;
  background: #f5f5f5;

  border-radius: 8px;
  font-size: 18px;
  line-height: 22px;
  border: none;
  cursor: pointer;
`;
const PageContainer = styled.div`
  width: 640px;
  margin: 0 auto;
  margin-top: 10%;
  text-align: center;
`;

const Span = styled.span`
  font-weight: bold;
`;

const UserPage = ({ userEmail, logOut }) => {
  const history = useHistory();
  const handleLogOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <PageContainer>
      <p>
        Здравствуйте, <Span> {userEmail}</Span>
      </p>
      <Button onClick={handleLogOut}>Выйти</Button>
    </PageContainer>
  );
};
UserPage.propTypes = {
  userEmail: PropTypes.string,
  logOut: PropTypes.func,
};
export default UserPage;
