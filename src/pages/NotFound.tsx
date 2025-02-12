import DashboardLayout from "../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back one step in history
  };

  return (
    <DashboardLayout>
      <div style={{ textAlign: "center"}}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Button variant="filled" onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default NotFound;
