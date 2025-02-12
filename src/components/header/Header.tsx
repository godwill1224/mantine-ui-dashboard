import {
  Burger,
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
  AppShell,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";
import { Logo } from "./Logo";
import classes from "./Header.module.css";

interface HeaderProps {
  toggle: () => void; // ✅ Fix: toggle should be a function
  opened: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggle, opened }) => {
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
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
};

export default Header;
