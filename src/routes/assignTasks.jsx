import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getItem } from '../utils/StorageFunctions';
import { getDefaultResultOrder } from 'dns';
import { setItem } from '../utils/StorageFunctions';

export const Route = createFileRoute('/assignTasks')({
  component: AssignTasks,
})

function AssignTasks() {
   const [newUsername, setNewUsername] = useState(() => {
    const names = localStorage.getItem('newUsername');
    return names ? names : 0;
   });

   const [newTaskData, setNewTaskData] = useState({
    task: '',
    dueDate: '',
    priority: '',
   });

   

   const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
   };

   const handleUsernameSubmit = (event) => {
    event.preventDefault();
    {/* Currently going to the log, will need to change this to be saved into some form of storage*/}
    console.log('Submitted username: ', newUsername);
    setNewUsername('');
    

   };

   const handleTaskChange = (event) => {
    const {name, value} = event.target;
    setNewTaskData(prevState => ({
      ...prevState,
      [name]: value,
    }));
   };

   const handleTaskSubmit = (event) => {
    event.preventDefault();
    {/* Currently going to the log, will need to change this to be saved into some form of storage*/}
    console.log('Task data submitted: ', newTaskData);
  

   useEffect(() => {
    localStorage.setItem('newUsername', newUsername);
   }, [newUsername]);

   useEffect(() => {
    localStorage.setItem('newTaskData', newTaskData);
   }, [newTaskData]);

   }

  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>
      
      <form onSubmit={handleUsernameSubmit}>
        <label>
          <h2>Add new user:</h2>
          <input type="text" value={newUsername} onChange={handleUsernameChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <div>
        <h2>Add new task</h2>
      <form onSubmit={handleTaskSubmit}>
        <label>
          <p>Task Details:</p>
          <input type="text" name="task" value={newTaskData.task} onChange={handleTaskChange}/>
        </label>
        <label>
          <p>Task Due Date:</p>
          <input type="text" name="dueDate" value={newTaskData.dueDate} onChange={handleTaskChange}/>
        </label>
        <label>
          <p>Task Priority Level:</p>
          <input type="text" name="priority" value={newTaskData.priority} onChange={handleTaskChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
}