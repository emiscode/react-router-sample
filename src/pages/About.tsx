import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/?from=About">About</Link>
    </div>
  );
}
