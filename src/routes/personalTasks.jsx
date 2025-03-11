import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/personalTasks")({
  component: PersonalTasks,
});

function PersonalTasks() {
  return (
    <>
      <h1>Welcome to personal tasks</h1>
      <p>You will be able to see the tasks assigned to you over in this section</p>
    </>
  );
}
