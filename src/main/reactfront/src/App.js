import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FindID from "./component/login/findID";
import Logins from "./component/login/login";
import Register from "./component/login/register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="mainArea">
        <Routes>
          <Route path="/login" element={<Logins />} />
          <Route path="/register" element={<Register />} />
          <Route path="/findid" element={<FindID />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
