import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import classes from "./DashboardLayout.module.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header toggle={toggle} opened={opened} />
      <Navbar />

      {/* Main Content Area */}
      <AppShell.Main className={classes.main}>
          {children}
          <Footer />
      </AppShell.Main>


    </AppShell>
  );
};

export default DashboardLayout;
