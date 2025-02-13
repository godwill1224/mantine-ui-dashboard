import {
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
  AppShell,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";
import { Logo } from "./Logo";
import classes from "./AuthHeader.module.css";

const AuthHeader: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell.Header className={classes.header}>
      <Logo style={{ width: 120 }} />
      <Group justify="space-between">
        <Button
          onClick={toggleColorScheme}
          leftSection={computedColorScheme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          variant="default"
        >
          {computedColorScheme === "dark" ? "Light" : "Dark"}
        </Button>
      </Group>
    </AppShell.Header>
  );
};

export default AuthHeader;
