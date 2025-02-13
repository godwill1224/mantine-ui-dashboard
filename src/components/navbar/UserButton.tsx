import { MdChevronRight } from "react-icons/md";
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import classes from './UserButton.module.css';

const UserButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <UnstyledButton className={classes.user}  onClick={() => navigate("/profile")}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>

        <MdChevronRight size={14} />
      </Group>
    </UnstyledButton>
  );
}

export default UserButton;
