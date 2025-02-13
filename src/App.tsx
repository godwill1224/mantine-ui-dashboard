import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import NotFound from "./pages/notFound/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication routes */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Dashboard routes */}
        <Route path="/admin/*" element={<DashboardRoutes />} />

        {/* Catch-all route for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
