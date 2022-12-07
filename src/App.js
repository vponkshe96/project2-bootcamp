import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MeetingLog from "./pages/meetinglog/MeetingLog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetinglog" element={<MeetingLog />} />
      </Routes>
    </div>
  );
}

export default App;
