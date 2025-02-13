import { AppShell } from "@mantine/core";
import AuthHeader from "../header/AuthHeader";
import Footer from "../footer/Footer";
import classes from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AuthHeader />

      {/* Main Content Area */}
      <AppShell.Main className={classes.main}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default AuthLayout;
