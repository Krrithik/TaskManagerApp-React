import { useState } from "react";
import { getItem } from "../utils/StorageFunctions";
import UserDropdown from "./UserDropdown";

export default function TeamTasks() {
  const users = getItem("users") || [];
  const otherUsers = getItem("users") || [];

  const [selectedCurrentUser, setSelectedCurrentUser] = useState("");
  const [pickUserView, setPickUserView] = useState("");

  {/* Picks the user who is using the app ... will need to be pushed out of here eventually */}
  const teamMemberTasks = users.filter(
    (teamMemberName) => teamMemberName.name != selectedCurrentUser
  );

  {/* Based on the who is the current user */}
  const teamMembersChoice = teamMemberTasks.filter(
    (userTasks) => userTasks.name == pickUserView
  );

  console.log(teamMemberTasks);

  return (
    <>
      <h3>Select a user to be</h3>
      <UserDropdown
        userOptions={users}
        selectedUser={selectedCurrentUser}
        setSelectedUser={setSelectedCurrentUser}
      />
      <hr />
      <h3>Select a user to view their tasks</h3>
      <UserDropdown
        userOptions={teamMemberTasks}
        selectedUser={pickUserView}
        setSelectedUser={setPickUserView}
      />
      <hr />
      {/* Display tasks of the selected user */}
      {pickUserView ? (
        <>
          {teamMembersChoice.map((teamMembers, index) => (
            <div key={index}>
              <h2>{teamMembers.name} tasks</h2>
              <table style={{width:'100%', tableLayout: 'fixed', border: '1px solid black'}}>
                <thead>
                  <th>Task</th>
                  <th>Due Date</th>
                  <th>Priority</th>
                  <th>Status</th>
                </thead>
                <tbody>
                {teamMembers.tasks.map((task, taskIndex) => (  
                    <tr key={taskIndex}>
                      <td>{task.taskName}</td>
                      <td>{task.dueDate}</td>
                      <td>{task.priority}</td>
                      <td>{task.status}</td>
                    </tr>
                  
                ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      ) : (
        <p>Please select a user to view their tasks.</p>
      )}
    </>
  );
}
