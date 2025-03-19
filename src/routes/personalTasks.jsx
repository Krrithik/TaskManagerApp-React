import { createFileRoute } from "@tanstack/react-router";
import PersonalTasks from "../components/PersonalTasks";

export const Route = createFileRoute("/personalTasks")({
  component: personalTasks,
});

function personalTasks() {
  return (
    <>
      <h1>Welcome to personal tasks</h1>
      <p>You will be able to see the tasks assigned to you over in this section</p>
      <PersonalTasks />
    </>
  );
}
