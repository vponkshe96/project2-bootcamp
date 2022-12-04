import React from "react";
import "./form.scss";
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
              ></textarea>
            </div>
            <div class="formInput">
              <label>Rating (between 1 and 10): </label>
              <br />
              <input type="range" min="0" max="10"></input>
            </div>
            <div class="formInput">
              <label>Post Meeting Action </label>
              <br />
              <input type="radio"></input>
              <label>Engage Actively</label>
              <br />
              <input type="radio"></input>
              <label>Engage Moderately</label>
              <br />
              <input type="radio"></input>
              <label>Ignore</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
