import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "../components/Signin/Signin";
import Home from "./Home";

const isBrowser = typeof window !== "undefined";
export default function App() {
  return isBrowser ? (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  ) : null;
}
