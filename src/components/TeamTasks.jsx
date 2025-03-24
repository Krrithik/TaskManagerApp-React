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
      <div style={{float:'right'}}>
        <h2 className="curr">Current user: {selectedCurrentUser}</h2>
        <UserDropdown
          userOptions={users}
          selectedUser={selectedCurrentUser}
          setSelectedUser={setSelectedCurrentUser}
        />
      </div>
      <h1>Welcome to team tasks</h1>
      <p>Here you will be able to see the tasks assigned to other team mates and users</p>
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
              <h3>{teamMembers.name} Tasks:</h3>
              <div className="scrollable-table">
              <table style={{width:'100%', tableLayout: 'fixed'}}>
                <thead>
                  <tr className="teamHeader">
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="teamTBody">
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
            </div>
          ))}
        </>
      ) : (
        <p>Please select a user to view their tasks.</p>
      )}
    </>
  );
}
