import "./App.css";
import "./reset.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import MainScreen from "./components/MainScreen/MainScreen";
import { SuspensionDataProvider } from "./components/SuspensionContext/SuspensionContext";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(!!auth);
  }, []);

  return (
    <SuspensionDataProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <MainScreen setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </SuspensionDataProvider>
  );
}

export default App;
