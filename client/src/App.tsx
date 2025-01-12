import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import {
  NavigateToDashboard,
  ProtectRoutes,
} from "./protectRoutes/protectRoutes";
import { SharedDashboard } from "./pages/SharedDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/link/:id" element={<SharedDashboard />} />

        <Route element={<NavigateToDashboard />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="/*" element={<h1> Check the URL</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
