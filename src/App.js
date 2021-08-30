import React, { useState, useEffect } from "react";
import Router from "routes/Router";
import { AppContext } from "components/Common/context";
import { api } from "services/api";



const App = (props) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    const sessionToken = localStorage.getItem("token");

    if (sessionToken) {
      api.defaults.headers.Authorization = `Bearer ${sessionToken}`;
      userHasAuthenticated(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
