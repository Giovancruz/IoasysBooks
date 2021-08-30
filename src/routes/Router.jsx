import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "components/Common/Loading";

const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));

const Router = (props) => {
  const userHasAuthenticated = false;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {userHasAuthenticated ? (
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
