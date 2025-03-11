import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assignTasks')({
  component: AssignTasks,
})

function AssignTasks() {
  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>
    </>
  );
}
