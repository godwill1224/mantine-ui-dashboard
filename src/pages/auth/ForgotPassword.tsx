import {
  Anchor,
  Button,
  Group,
  Paper,
  Text,
  PaperProps,
  TextInput,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import AuthLayout from "../../components/layout/AuthLayout";

const ForgotPassword: React.FC = (props: PaperProps) => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  return (
    <AuthLayout>
      <Paper radius="md" p="lg" withBorder {...props}>
        <Text size="lg" fw={500} ta="center">
          Forgot your password?
        </Text>
        <Text c="dimmed" fz="sm" ta="center" mb="lg">
          Enter your email to get a reset link
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              size="xs"
              c="dimmed"
              type="button"
              onClick={() => navigate("/")}
            >
              Back to the login page
            </Anchor>
            <Button type="submit">Reset</Button>
          </Group>
        </form>
      </Paper>
    </AuthLayout>
  );
};

export default ForgotPassword;
