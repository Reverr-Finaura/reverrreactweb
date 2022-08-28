import React from "react";
import "./MentorForm.module.css";
const MentorForm = () => {
  return (
    <div>
      <div>
        <h1>Let's get your profile done first!!</h1>
        <img src="" alt="" />
        <div>
          <input type="text" name="" id="" placeholder="Full name" />
          <input type="text" name="" id="" placeholder="Last name" />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Date of Birth" />
          <input type="text" name="" id="" placeholder="Gender" />
        </div>
        <div>
          <input type="text" name="" id="" placeholder="Hometown" />
          <input type="text" name="" id="" placeholder="Location" />
        </div>
        <input type="text" name="" id="" placeholder="Language" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Add Bio"
        ></textarea>
      </div>

      <div>
        <h3>How you want to meet people</h3>
        <div>
          <a>
            <img src="" alt="" />
          </a>
        </div>
      </div>

      <div>
        <h1>Let's know about your Education!</h1>
        <select placeholder="Degree">
          <option value="degree">Degree</option>
        </select>
        <select placeholder="Degree">
          <option value="degree">College/School</option>
        </select>
        <input type="text" name="" id="" placeholder="Starting date" />
        <input type="text" name="" id="" placeholder="Last Date" />
        <img src="" alt="" />
      </div>

      <div>
        <h1>Now let's get your Professional Profile Done</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Previous Organisation you worked with"
        />
        <input type="text" name="" id="" placeholder="Designation" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Duration of years you worked"
        />
        <input type="text" name="" id="" placeholder="Your Role" />
        <input type="text" name="" id="" placeholder="Skills" />
        <img src="" alt="" />
      </div>

      <div>
        <textarea
          name=""
          id=""
          placeholder="Add Bio"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name=""
          id=""
          placeholder="Your Future Goals"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          name=""
          id=""
          placeholder="Your Vision"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div>
        <h1>Do you have a Start-Up?</h1>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>

      <div>
        <h1>Start Up Verification</h1>
        <h3>Upload comapany documents</h3>
        <img src="" alt="" />
        <input type="text" name="" placeholder="Full Name" id="" />
        <input type="text" name="" placeholder="Professional Email" id="" />
        <input type="text" name="" placeholder="Mobile No." id="" />
        <input type="text" name="" placeholder="LinkedIn" id="" />
        <a>
          <button>Save &#38; Next</button>
        </a>
        <p>The provided information can be edited in future</p>
      </div>
    </div>
  );
};

export default MentorForm;
