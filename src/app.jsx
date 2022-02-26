import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Login from "./layouts/login";
import UserPage from "./components/page/userPage";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
`;

function App() {
  const [email, setEmail] = useState();
  const getUserEmail = (userEmail) => {
    setEmail(userEmail);
  };

  const logOut = () => {
    setEmail(null);
  };
  return (
    <div>
      <Title>ONLY.</Title>
      <Switch>
        <Route
          path="/profile"
          render={() => <UserPage userEmail={email} logOut={logOut} />}
        />
        <Route
          path="/"
          exact
          render={() => <Login email={email} getUserEmail={getUserEmail} />}
        />
      </Switch>
    </div>
  );
}

export default App;
