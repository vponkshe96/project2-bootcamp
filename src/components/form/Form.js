import { React, useState } from "react";
import "./form.scss";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "@firebase/firestore";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function Form() {
  const meetingLogCollectionRef = collection(db, "meetingLog");
  //establishes connection b/w app and meeting log collection (table) in firebase db
  const [newMeeting, setNewMeeting] = useState({
    fullName: "",
    tag: "",
    meetingDate: "",
    location: "",
    purpose: "",
    meetingNotes: "",
    // rating: "",
    // postMeetingAction: " ",
  });
  // useState Hook
  // meeting is an empty object which will be populated when user fills form
  // On submit will be sent to firebase DB

  const createUser = async () => {
    await addDoc(meetingLogCollectionRef, newMeeting);
  };

  //Form Event Handlers
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setNewMeeting({ ...newMeeting, [fieldName]: fieldValue });
    //copy value of contact and override a particular key's value
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //prevents page from refreshing after submitting
    createUser(newMeeting);
    //passes form data to createUser function
    //It will send form data to meeting log collection (table) in firebase db
    e.target.reset();
    //resets form values
    alert("SUCCESS your meeting has been logged!");
    //alert user
  };
  return (
    <div className="form">
      <div className="top">
        <h1>Add New Meeting</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <label htmlFor="file" id="imageSelector">
                Select Image
                <AddPhotoAlternateIcon color="primary" className="icon" />
              </label>
              {/* <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleChange}
              ></input> */}
              {/* binding icon (inside label tag) to file input button
              to make it look pro */}
            </div>
            <div className="formInput">
              <label>Full Name</label>
              <br />
              <input
                name="fullName"
                type="text"
                placeholder="Vinit Ponkshe"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInput">
              <label>Tag</label>
              <br />
              <input
                name="tag"
                type="text"
                placeholder="Friend"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInput">
              <label>Meeting Date</label>
              <br />
              <input
                name="meetingDate"
                type="date"
                placeholder="02/10/1996"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInput">
              <label>Location</label>
              <br />
              <input
                name="location"
                type="text"
                placeholder="Zoom"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInput">
              <label>Purpose</label>
              <br />
              <input
                name="purpose"
                type="text"
                placeholder="Job Networking"
                onChange={handleChange}
              ></input>
            </div>
            <div className="formInput">
              <label>Meeting Notes</label>
              <br />
              <textarea
                name="meetingNotes"
                type="text"
                placeholder="It was a good meeting..."
                rows="5"
                onChange={handleChange}
              ></textarea>
            </div>
            {/* <div className="formInput">
              <label>Rating (between 1 and 10): </label>
              <br />
              <input type="range" id="rating" min="0" max="10" onChange={{ handleChange }}></input>
              {/* NEED to display slider value! */}
            {/* </div>
            <div className="formInput">
              <label for="action">Post Meeting Action</label>
              <br />
              <select id="action">
                <option value="">Engage Actively</option>
                <option value="">Engage Moderately</option>
                <option value="">Ignore</option>
              </select>
            </div> */}
            <div className="submitForm">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
