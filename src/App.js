import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MeetingList from "./pages/meetinglist/MeetingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetinglist" element={<MeetingList />} />
      </Routes>
    </div>
  );
}

export default App;
