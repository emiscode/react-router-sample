import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  return (
    <div>
      <h1>Home</h1>
      <p>from: {from}</p>
    </div>
  );
}
