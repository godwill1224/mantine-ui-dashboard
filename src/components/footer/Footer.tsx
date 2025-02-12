import { Text, Center } from "@mantine/core";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <Center className={classes.footer}>
      <Text c="dimmed" size="xs">
        &copy; {new Date().getFullYear()} MANTINE. All rights reserved.
      </Text>
    </Center>
  );
};

export default Footer;
