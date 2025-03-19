import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="about-page">
      <h1>ABOUT PAGE!</h1>
      <p>
        This is a lazy page router, just as an example for future reference.
      </p>
    </div>
  );
}
