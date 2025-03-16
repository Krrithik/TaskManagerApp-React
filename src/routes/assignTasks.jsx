import { createFileRoute } from "@tanstack/react-router";
import AssignTasks from "../AssignTasks.jsx";

export const Route = createFileRoute("/assignTasks")({
  component: assignTasks,
});

function assignTasks() {
  return (
    <>
      <AssignTasks />
    </>
  );
}
