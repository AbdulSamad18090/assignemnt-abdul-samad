import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
