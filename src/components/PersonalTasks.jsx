import { useState } from "react";
import { getItem } from "../utils/StorageFunctions";

export default function PersonalTasks() {
  // Retrieve users from local storage
  const users = getItem("users") || [];

  // State to store the selected user's name
  const [selectedUser, setSelectedUser] = useState("");

  // Find the selected user's tasks
  const selectedUserTasks =
    users.find((user) => user.name === selectedUser)?.tasks || [];
  /* instead of this
     const findSelectedUserTasks = users.find((user) => user.name === selectedUser)
      const tasks = findSelectedUserTask && findSelectedUserTasks ? findSelectedUserTasks.tasks : [];
    */

      
  return (
    <>
      {/* Dropdown to select a user */}
      <div className="dropdown-container">
        <label htmlFor="userDropdown">Select User:</label>
        <select
          id="userDropdown"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">-- Select a User --</option>
          {users.map((user) => (
            <option key={user.name} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display tasks of the selected user */}
      {selectedUser ? (
        <div>
          <h2>Tasks for {selectedUser}:</h2>
          {selectedUserTasks.length > 0 ? (
            <ul>
              {selectedUserTasks.map((task, index) => (
                <li key={index}>
                  <strong>Task:</strong> {task.taskName} |
                  <strong> Due Date:</strong> {task.dueDate} |
                  <strong> Priority:</strong> {task.priority}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks found for this user.</p>
          )}
        </div>
      ) : (
        <p>Please select a user to view their tasks.</p>
      )}
    </>
  );
}
