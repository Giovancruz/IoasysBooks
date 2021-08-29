import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

const Router = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/books" component={HomePage}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
