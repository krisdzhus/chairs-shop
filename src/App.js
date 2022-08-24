// Modules from React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Necessary components
import Dashboard from "./Pages/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

// Theme provider
import { ThemeProvider } from "@emotion/react";

// Custom theme
import useCustomTheme from "./hooks/useCustomTheme";

// Auth Provider Context
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

// Private Route
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  // Theme value from custom theme
  const { theme } = useCustomTheme();
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/explore">
                <Explore></Explore>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/purchase/:id">
                <Purchase></Purchase>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
