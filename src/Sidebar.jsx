import { Link } from "@tanstack/react-router";

export default function SideBar() {
  return (
    <>
      <nav>
        <nav className="sidebar">
          <Link to="/"> <h2>Home</h2></Link> 
          <Link to="/about"><h2>About</h2></Link>
        </nav>
      </nav>
    </>
  );
}
