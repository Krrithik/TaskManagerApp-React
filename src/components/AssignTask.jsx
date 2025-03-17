import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/StorageFunctions";

export default function AssignTask() {
  const [tasks, setTasks] = useState( 
    () =>  { return getItem("tasks") || [];}
  );

  const [newTaskData, setNewTaskData] = useState({
    task: "",
    dueDate: "",
    priority: "",
  });

	useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

	function handleTaskSubmit(e) {
    e.preventDefault();
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
      <div>
        <h3>Add new task</h3>
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
					<div><button type="submit">Submit</button></div>
        </form>
      </div>
    </>
	);
}