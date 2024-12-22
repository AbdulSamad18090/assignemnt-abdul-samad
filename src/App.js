import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth";
import RepositoriesPage from "./pages/repositories/Repositories";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
