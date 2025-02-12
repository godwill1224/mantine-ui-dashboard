import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./NavbarLinksGroup.module.css";

interface NavbarLinksGroupProps {
  icon: React.ElementType;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; route: string }[];
  route?: string;
}

const NavbarLinksGroup: React.FC<NavbarLinksGroupProps> = ({
  icon: Icon,
  label,
  initiallyOpened = false,
  links = [],
  route,
}: NavbarLinksGroupProps) => {
  const [opened, setOpened] = useState(initiallyOpened);
  const navigate = useNavigate();
  const hasLinks = links.length > 0;
  const hasRoute = Boolean(route);

  const handleNavigation = () => {
    if (hasRoute) navigate(route!);
    else setOpened((prev) => !prev);
  };

  return (
    <>
      <UnstyledButton onClick={handleNavigation} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Text ml="md">{label}</Text>
          </Box>
          {hasLinks && (
            <MdChevronRight
              className={classes.chevron}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks && (
        <Collapse in={opened}>
          {links.map((link) => (
            <UnstyledButton
              key={link.label}
              className={classes.link}
              onClick={() => navigate(link.route)}
            >
              {link.label}
            </UnstyledButton>
          ))}
        </Collapse>
      )}
    </>
  );
}

export default NavbarLinksGroup;
