import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/assignTasks')({
  component: AssignTasks,
})

function AssignTasks() {
   const [newUsername, setUsername] = useState('');

   const handleChange = (event) => {
    setUsername(event.target.value);
   };

   const handleUsernameSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted username: ', newUsername);
    setUsername('');
   }

  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>
      
      <form onSubmit={handleUsernameSubmit}>
        <label>
          <h2>Add new user:</h2>
          <input type="text" value={newUsername} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </>
  );
}
