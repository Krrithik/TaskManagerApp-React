import { createFileRoute } from '@tanstack/react-router';

import AddUser from '../components/addUsers';
import AddTask from '../components/addTask';

export const Route = createFileRoute('/assignTasks')({
  component: AssignTasks,
})

function AssignTasks() {
  return (
    <>
      <h1>Assign tasks</h1>
      <p>Only admins will be able to assign tasks to users</p>
      
      <div>
        {AddUser()}
      </div>
        
      <div>
        {AddTask()}
      </div>
    </>
  );
}
