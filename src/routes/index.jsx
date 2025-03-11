import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
  <div>Hello home, ie index!</div>
  <App />
  </>
)

}
