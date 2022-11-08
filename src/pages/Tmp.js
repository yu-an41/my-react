import { useParams, Link } from "react-router-dom";
import ThemeTest from "../components/ThemeTest";

export default function Tmp() {
  const { sid } = useParams();

  return (
    <div className="container">
      <h1>tmp {sid} </h1>
      <div>
        <Link to="/tmp/1">1</Link>
      </div>
      <div>
        <Link to="/tmp/2">2</Link>
      </div>
      <div>
        <Link to="/tmp/3">3</Link>
      </div>
    <div>
      <ThemeTest/>
    </div>
    </div>
  );
}
