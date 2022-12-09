import { React, useState } from "react";
import "./addNewMeeting.scss";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "@firebase/firestore";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddNewMeeting = () => {
  const meetingCollection = collection(db, "meetings");
  //establishes connection b/w app and meeting log collection (table) in firebase db

  const [newMeeting, setNewMeeting] = useState({
    fullName: "",
    tag: "",
    meetingDate: "",
    location: "",
    purpose: "",
    meetingNotes: "",
    rating: 10,
    status: "Active",
  });

  //newMeeting is initialized with empty values, filled as users completes form
  //upon form submission -> sent to Firebase DB

  const createUser = async () => {
    await addDoc(meetingCollection, newMeeting);
    //telling firestore db to add our form submitted data to our meeting collection
    //doc is like a new row/entry added to table
  };
  //using async await syntax, cleaner way of handling promises
  //it is asynchronous as I'm making a request to firestore db

  //Form Event Handlers
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setNewMeeting({ ...newMeeting, [fieldName]: fieldValue });
    //copy value of newMeeting and override a field's value
    //merging and updating state
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
            <div className="formInput">
              <label>Rating (between 1 and 10): </label>
              <br />
              <input
                type="range"
                name="rating"
                min="0"
                max="10"
                onChange={handleChange}
              ></input>
              {/* NEED to display slider value! */}
            </div>
            <div className="formInput">
              <label htmlFor="status">Status</label>
              <br />
              <select name="status" onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Maintain">Maintain</option>
                <option value="Ignore">Ignore</option>
              </select>
            </div>
            <div className="submitForm">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMeeting;
