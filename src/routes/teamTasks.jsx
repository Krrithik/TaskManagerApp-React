import { createFileRoute } from '@tanstack/react-router'
import SelectUser from '../components/selectUser';
import TeamTasks from '../components/TeamTasks';

export const Route = createFileRoute('/teamTasks')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>Welcome to team tasks</h1>
      <p>Here you will be able to see the tasks assigned to other team mates and users</p>
      <TeamTasks />
    </>
  );
}
