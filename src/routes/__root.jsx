import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../style.css"
import SideBar from '../Sidebar'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='app-container'>
      <SideBar />
      <div className='content'>
      <Outlet />
      </div>
      </div>
      <TanStackRouterDevtools />
    </>
  )
})