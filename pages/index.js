import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

const isBrowser = typeof window !== "undefined";
export default function App() {
  return isBrowser ? (
    <Router>
      <Home />
    </Router>
  ) : null;
}
