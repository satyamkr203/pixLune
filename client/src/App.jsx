
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Signin } from "./pages/Signin.jsx";
import { Signup } from "./pages/Signup.jsx";
import { PrivateRoute } from "./routes/PrivateRoute.jsx";
import { AuthRoute } from "./routes/AuthRoute.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthRoute>
              <Signin />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}
