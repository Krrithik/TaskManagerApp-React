import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="about-page">
      <h1>ABOUT</h1>
      <h3>Goal</h3>
      <p>
        Goal of this app is to be able manage tasks with groups of people.
      </p>
    </div>
  );
}
