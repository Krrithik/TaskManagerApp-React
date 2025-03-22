import { useState } from "react";
import { getItem, setItem } from "../utils/StorageFunctions";
import UserDropdown from "./UserDropdown";

export default function PersonalTasks() {
  // Retrieve users from local storage
  const [users, setUsers] = useState(() => getItem("users") || []);

  // State to store the selected user's name
  const [selectedUser, setSelectedUser] = useState("");

  // Find the selected user's tasks
  const selectedUserTasks =
    users.find((user) => user.name === selectedUser)?.tasks || [];
  /* instead of this
     const findSelectedUserTasks = users.find((user) => user.name === selectedUser)
      const tasks = findSelectedUserTask && findSelectedUserTasks.tasks ? findSelectedUserTasks.tasks : [];
    */

  function onDeleteHandler(deleteTaskName) {
    const updatedUser = users.map((user) =>
      user.name === selectedUser
        ? {
            ...user,
            tasks: user.tasks.filter((task) => task.taskName != deleteTaskName),
          }
        : user
    );

    setUsers(updatedUser);
    setItem("users", updatedUser);
  }

  


 


  return (
    <>
      {/* Dropdown to select a user */}
      <UserDropdown
        userOptions={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

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
                  <button onClick={() => onDeleteHandler(task.taskName)}>
                    delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks found for this user.</p>
          )}

          <div className="assigned-container">
           
          </div>

          <div className="inprogress-container">
            
          </div>

          <div className="done-container">

          </div>


        </div>
      ) : (
        <p>Please select a user to view their tasks.</p>
      )}
    </>
  );
}
