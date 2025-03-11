import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <h1>ABOUT PAGE!</h1>
      <p>THis is a lazy page router, just as an example in future reference</p>
    </>
  );
}
