import { useState } from "react";
import { getItem } from "../utils/StorageFunctions";
import UserDropdown from "./UserDropdown";

export default function TeamTasks() {
  const users = getItem("users") || [];

  const [selectedUser, setSelectedUser] = useState("");

  const teamMemberTasks = users.filter(
    (teamMemberName) => teamMemberName.name != selectedUser
  );
  console.log(teamMemberTasks);

  return (
    <>
      <UserDropdown
        userOptions={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

      {/* Display tasks of the selected user */}
      {selectedUser ? (
        <>
          {teamMemberTasks.map((teamMembers, index) => (
            <div key={index}>
              <h2>{teamMembers.name} tasks</h2>
              <ul>
                {teamMembers.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    <strong>Task:</strong> {task.taskName} |{" "}
                    <strong>Due Date:</strong> {task.dueDate} |{" "}
                    <strong>Priority:</strong> {task.priority}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : (
        <p>Please select a user to view their tasks.</p>
      )}
    </>
  );
}
