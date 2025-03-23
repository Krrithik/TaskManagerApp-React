import { Link } from "@tanstack/react-router";
import "./style.css"

export default function SideBar() {
  return (
    <>
      <nav>
        <nav className="sidebar">
          <Link to="/"> <h2>Home</h2></Link> 
          <Link to="/teamTasks"><h2>Team Tasks</h2></Link>
          <Link to="/personalTasks"><h2>Personal Tasks</h2></Link>
          <Link to="/assignTasks"><h2>Assign Tasks</h2></Link>
          <Link to="/about"><h2>About</h2></Link>
        </nav>
      </nav>
    </>
  );
}
