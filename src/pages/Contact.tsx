import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/?from=Contact">Home</Link>
    </div>
  );
}
