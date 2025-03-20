import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/StorageFunctions";
import AddUser from "./AddUser";

export default function AssignTask() {
  const [users, setUsers] = useState(() => getItem("users") || []);
  const [tasks, setTasks] = useState(() => getItem("tasks") || []);

  const [newTaskData, setNewTaskData] = useState({
    name: "",
    role: "",
    task: {
      taskName: "",
      dueDate: "",
      priority: "medium",
      status: "assigned",
    },
  });

  useEffect(() => {
    setItem("tasks", tasks);
    setItem("users", users);
  }, [tasks, users]);

  
   /* function handleUserSubmit(e) {
    e.preventDefault();
    if (!newTaskData.name) return;

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: newTaskData.name,
        role: newTaskData.role,
        tasks: [],
      },
    ]);

    setNewTaskData((prev) => ({
      ...prev,
      name: "",
      role: "",
    }));
  }  */

  function handleTaskSubmit(e) {
    e.preventDefault();
    if (!newTaskData.task.taskName || !newTaskData.name) return;

    const newTask = {
      ...newTaskData.task,
      assignedTo: newTaskData.name,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Update user's task list
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.name === newTaskData.name
          ? { ...user, tasks: [...user.tasks, newTask] }
          : user
      )
    );

    setNewTaskData((prev) => ({
      ...prev,
      task: {
        taskName: "",
        dueDate: "",
        priority: "medium",
        status: "assigned",
      },
    }));
  }

  /* function createNewTask(t){
    let newTask = {
        details: t.task,
        due: t.dueDate,
        priority: t.priority,
    }
    return newTask;
  } */


  function handleUserAdded(e){
    setUsers((prevUsers) => [...prevUsers,{...e, tasks: []}])

  }




  return (
    <div className="assign-task-container">
      {/* Add User Form */}
      <AddUser onUserAdded = {handleUserAdded}/> 

      {/* Assign Task Form */}
      <div className="task-form-section">
        <h3>Assign New Task</h3>
        <form onSubmit={handleTaskSubmit}>
          <div className="form-group">
            <label>Assign to:</label>
            <select
              value={newTaskData.name}
              onChange={(e) =>
                setNewTaskData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.name} value={user.name}>
                  {user.name} ({user.role})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Task Name:</label>
            <input
              type="text"
              value={newTaskData.task.taskName}
              onChange={(e) =>
                setNewTaskData((prev) => ({
                  ...prev,
                  task: { ...prev.task, taskName: e.target.value },
                }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Due Date:</label>
            <input
              type="date"
              value={newTaskData.task.dueDate}
              onChange={(e) =>
                setNewTaskData((prev) => ({
                  ...prev,
                  task: { ...prev.task, dueDate: e.target.value },
                }))
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Priority:</label>
            <select
              value={newTaskData.task.priority}
              onChange={(e) =>
                setNewTaskData((prev) => ({
                  ...prev,
                  task: { ...prev.task, priority: e.target.value },
                }))
              }
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit">Assign Task</button>
        </form>
      </div>
    </div>
  );
}
