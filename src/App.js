import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./pages/home/Home";
import MeetingList from "./pages/meetinglist/MeetingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/meetinglist" element={<MeetingList />} />
      </Routes>
    </div>
  );
}

export default App;
