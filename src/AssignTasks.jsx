import { useEffect, useState } from "react";
import { setItem, getItem } from "./utils/StorageFunctions";
//import { getDefaultResultOrder } from 'dns';

export default function AssignTasks() {

  const [tasks, setTasks] = useState( 
    () =>  { return getItem("tasks") || [];}
  );

  const [newUsername, setNewUsername] = useState(() => {
    const names = getItem("newUsername");
    return names;
  });

  const [newTaskData, setNewTaskData] = useState({
    task: "",
    dueDate: "",
    priority: "",
  });

  useEffect(() => {
    setItem("newUsername", newUsername);
  }, [newUsername]);

  useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);


  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    {
      /* Currently going to the log, will need to change this to be saved into some form of storage*/
    }
    console.log("Submitted username: ", newUsername);
    setNewUsername("");
  };

  /* const handleTaskChange = (event) => {
    const { name, value } = event.target;
    setNewTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }; */

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    {
      /* Currently going to the log, will need to change this to be saved into some form of storage*/
    }
  /*   console.log("Task data submitted: ", newTaskData); */



        let newTask = createNewTask(newTaskData);
        setTasks((prevTasks) => [...prevTasks, newTask]);
        
        setNewTaskData({
            task: "",
            dueDate: "",
            priority: "",
        })
        
        console.log(tasks);

        

       /*  const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData);

        
        setNewTaskData({
            task: "",
            dueDate: "",
            priority: "",
        })

        console.log(payload); */

    };


  function createNewTask(t){
    let newTask = {
        details: t.task,
        due: t.dueDate,
        priority: t.priority,
    }
    return newTask;
  }

  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>

      <form onSubmit={handleUsernameSubmit}>
        <label>
          <h2>Add new user:</h2>
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Add new task</h2>
        <form onSubmit={handleTaskSubmit}>
          <label>
            <p>Task Details:</p>
            <input
              type="text"
              name="task"
              value={newTaskData.task}
              onChange={(e) => setNewTaskData({...newTaskData, task: e.target.value})}
            />
          </label>
          <label>
            <p>Task Due Date:</p>
            <input
              type="text"
              name="dueDate"
              value={newTaskData.dueDate}
              onChange={(e) => setNewTaskData({...newTaskData, dueDate: e.target.value})}
            />
          </label>
          <label>
            <p>Task Priority Level:</p>
            <input
              type="text"
              name="priority"
              value={newTaskData.priority}
              onChange={(e) => setNewTaskData({...newTaskData, priority: e.target.value})}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
