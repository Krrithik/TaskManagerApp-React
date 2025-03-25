import { createFileRoute } from "@tanstack/react-router";
//import AssignTasks from "../AssignTasks.jsx";
import AssignTask from "../components/AssignTask.jsx";
import AddUser from "../components/AddUser.jsx";
import SelectUser from "../components/selectUser.jsx";

export const Route = createFileRoute("/assignTasks")({
  component: assignTasks,
});

function assignTasks() {

  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>
      <hr />
      <AssignTask />
    </>
  );
}
