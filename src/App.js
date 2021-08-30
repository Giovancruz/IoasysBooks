import React, { useState, useEffect } from "react";
import Router from "routes/Router";
import { AuthProvider } from "contexts/auth";



const App = (props) => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
