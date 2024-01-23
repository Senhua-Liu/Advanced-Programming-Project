import React from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider, useUser } from './context/UserContext';
import AuthenticatedRoutes from './authenticate'; 

function App() {
  return (
    <UserProvider>
            <Router>
              <AuthenticatedRoutes />
            </Router>
    </UserProvider>
  );
}



export default App;