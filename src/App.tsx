import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardRoutes from "./routes/DashboardRoutes";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard routes */}
        <Route path="/*" element={<DashboardRoutes />} />

        {/* Catch-all route for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
