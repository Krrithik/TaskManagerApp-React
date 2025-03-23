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

  function updateUserTasks(updatedTasks) {
    const updatedUsers = users.map((user) =>
      user.name === selectedUser ? { ...user, tasks: updatedTasks } : user
    );
    setUsers(updatedUsers);
    setItem("users", updatedUsers);
  }

  function handleMoveRight(taskName, currentStatus) {
    let newStatus = "";
    if (currentStatus === "assigned"){
       newStatus = "inprogress";
    }else if (currentStatus === "inprogress") {
      newStatus = "done";
    }

    if (newStatus) {
      const updatedTasks = selectedUserTasks.map((task) =>
        task.taskName === taskName ? { ...task, status: newStatus } : task
      );
      updateUserTasks(updatedTasks);
    }
  }

  function handleMoveLeft(taskName, currentStatus) {
    let newStatus = "";
    if (currentStatus === "done") {
      newStatus = "inprogress";
    }else if (currentStatus === "inprogress"){
       newStatus = "assigned";
    }

    if (newStatus) {
      const updatedTasks = selectedUserTasks.map((task) =>
        task.taskName === taskName ? { ...task, status: newStatus } : task
      );
      updateUserTasks(updatedTasks);
    }
  }

  function renderColumn(status, showLeftButton, showRightButton){
    const filteredTasks = selectedUserTasks.filter(
      (task) => task.status === status
    )

    return (
      <>
      <div className={`${status}-container`}>
        <h3 className="status-title">{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div className="task-card" key={index}>
              <div>Task: {task.taskName}</div>
              <div>Due Date: {task.dueDate}</div>
              <div>Priority: {task.priority}</div>
              <button onClick={() => onDeleteHandler(task.taskName)}>
                Delete
              </button>
              {showLeftButton && (
                <button
                  onClick={() => handleMoveLeft(task.taskName, task.status)}
                >
                  Move Left
                </button>
              )}
              {showRightButton && (
                <button
                  onClick={() => handleMoveRight(task.taskName, task.status)}
                >
                  Move Right
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No tasks in this column.</p>
        )}
      </div>
    </>
    );

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
          <h3>Tasks for {selectedUser}:</h3>
          {selectedUserTasks.length > 0 ? (
             <>
            <div className="columns-container">
            {renderColumn("assigned", false, true)}
            {renderColumn("inprogress", true, true)}
            {renderColumn("done", true, false)}
          </div>
           </>
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
