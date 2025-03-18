import { createLazyFileRoute } from "@tanstack/react-router";
import { getItem } from "../utils/StorageFunctions";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  // Retrieve task data from local storage
  const taskData = getItem("users");

  return (
    <>
      <h1>ABOUT PAGE!</h1>
      <p>
        This is a lazy page router, just as an example for future reference.
      </p>

      {/* Check if taskData exists and display it */}
      {taskData && taskData.length > 0 ? (
        <div>
          <h2>Users:</h2>
          <ul>
            {taskData.map((user, index) => (
              <li key={index}>
                <strong>Name:</strong> {user.name} | <strong>Role:</strong>{" "}
                {user.role}
                <br />
                <strong>Tasks:</strong>
                <ul>
                  {user.tasks.map((task, i) => (
                    <li key={i}>
                      Task: {task.taskName}, Due Date: {task.dueDate}, Priority:{" "}
                      {task.priority}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No users found in local storage.</p>
      )}
    </>
  );
}
