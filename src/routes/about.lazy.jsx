import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="about-page">
      <h1 style={{textAlign: 'center'}}>ABOUT</h1>
      <h3 style={{textAlign: 'center'}}>Goal</h3>
      <p style={{textAlign: 'center'}}>
        Goal of this app is to be able manage tasks with groups of people.
      </p>
      <p style={{textAlign: 'center'}}>
        To be able to indicate tasks that are assigned to certain users. 
        Whether it is managing your own tasks; based on what is not started, in process, or completed. As well as veiweing others tasks
      </p>
      <p style={{textAlign: 'center'}}>This includes being able to assign tasks to users, with setting dates, and priority of the task</p>
    </div>
  );
}
