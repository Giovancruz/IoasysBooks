import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "components/Common/Loading";
import { useAuthContext } from "contexts/auth";

const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));

const Router = (props) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {isAuthenticated ? (
            <Route exact path="/" component={HomePage}></Route>
          ) : (
            <Route exact path="/" component={LoginPage}></Route>
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
