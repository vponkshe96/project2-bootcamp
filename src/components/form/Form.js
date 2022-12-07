import React from "react";
import "./form.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function Form() {
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
          <form>
            <div class="formInput">
              <label for="file" id="imageSelector">
                Select Image
                <AddPhotoAlternateIcon color="primary" className="icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }}></input>
              {/* binding icon (inside label tag) to file input button
              to make it look pro */}
            </div>
            <div class="formInput">
              <label>Full Name</label>
              <br />
              <input type="text" placeholder="Vinit Ponkshe"></input>
            </div>
            <div class="formInput">
              <label>Tag</label>
              <br />
              <input type="text" placeholder="Friend"></input>
            </div>
            <div class="formInput">
              <label>Meeting Date</label>
              <br />
              <input type="date" placeholder="02/10/1996"></input>
            </div>
            <div class="formInput">
              <label>Location</label>
              <br />
              <input type="text" placeholder="Zoom"></input>
            </div>
            <div class="formInput">
              <label>Purpose</label>
              <br />
              <input type="text" placeholder="Job Networking"></input>
            </div>
            <div class="formInput">
              <label>Meeting Notes</label>
              <br />
              <textarea
                type="text"
                placeholder="It was a good meeting..."
                rows="5"
              ></textarea>
            </div>
            <div class="formInput">
              <label>Rating (between 1 and 10): </label>
              <br />
              <input type="range" id="rating" min="0" max="10"></input>
              {/* NEED to display slider value! */}
            </div>
            <div class="formInput">
              <label for="action">Post Meeting Action</label>
              <br />
              <select id="action">
                <option value="">Engage Actively</option>
                <option value="">Engage Moderately</option>
                <option value="">Ignore</option>
              </select>
            </div>
            <div class="submitForm">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
