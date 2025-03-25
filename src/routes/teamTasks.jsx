import { createFileRoute } from '@tanstack/react-router'
import SelectUser from '../components/selectUser';
import TeamTasks from '../components/TeamTasks';

export const Route = createFileRoute('/teamTasks')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <TeamTasks />
    </>
  );
}
