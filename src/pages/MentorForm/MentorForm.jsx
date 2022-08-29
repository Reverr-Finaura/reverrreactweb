import React from "react";
import styles from "./MentorForm.module.css";
import Footer from "../Footer/Footer";
const MentorForm = () => {
  return (
    <div className={styles.form_container}>
      <img src="/images/reverr-logo.svg" alt="" className={styles.logo} />
      <div className={styles.personal_details}>
        <h1>Let's get your profile done first!!</h1>
        <label htmlFor="profile_choose">
          <img src="/images/profile.png" alt="" />
          <input
            type="file"
            name=""
            accept=".jpg,.png,.jpeg"
            id="profile_choose"
            hidden
          />
        </label>
        <div className={styles.input_flex}>
          <input type="text" name="" id="" placeholder="Full name" />
          <input type="text" name="" id="" placeholder="Last name" />
        </div>
        <div className={styles.input_flex}>
          <input type="text" name="" id="" placeholder="Date of Birth" />
          <input type="text" name="" id="" placeholder="Gender" />
        </div>
        <div className={styles.input_flex}>
          <input type="text" name="" id="" placeholder="Hometown" />
          <input type="text" name="" id="" placeholder="Location" />
        </div>
        <input type="text" name="" id="" placeholder="Language" />
        <textarea name="" id="" placeholder="Add Bio"></textarea>

        <div>
          <h3>How you want to meet people</h3>
          <div className={styles.social_icons}>
            <a>
              <img src="/images/image 11.svg" alt="" />
            </a>
            <a>
              <img src="/images/image 12.svg" alt="" />
            </a>
            <a>
              <img src="/images/image 14.svg" alt="" />
            </a>
            <a>
              <img src="/images/image 13.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.education_details}>
        <h1>Let's know about your Education!</h1>
        <select placeholder="Degree">
          <option value="degree">Degree</option>
        </select>
        <select placeholder="Degree">
          <option value="degree">College/School</option>
        </select>
        <input type="text" name="" id="" placeholder="Starting date" />
        <input type="text" name="" id="" placeholder="Last Date" />
        <img src="/images/plus-vector.svg" alt="" className={styles.add_btn} />
      </div>

      <div className={styles.professional_details}>
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
        <img src="/images/plus-vector.svg" alt="" className={styles.add_btn} />
      </div>

      <div className={styles.additional_details}>
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

      <div className={styles.startup_details}>
        <h1>Do you have a Start-Up?</h1>
        <div className={styles.yesno_btns}>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>

      <div className={styles.startup_details}>
        <h1>Start Up Verification</h1>
        <h3>Upload comapany documents</h3>
        <label htmlFor="upload_docs">
          <img
            src="/images/upload-vector.svg"
            alt=""
            className={styles.upload_btn}
          />
        </label>
        <input type="file" hidden name="" id="upload_docs" />
        <input type="text" name="" placeholder="Full Name" id="" />
        <input type="text" name="" placeholder="Professional Email" id="" />
        <input type="text" name="" placeholder="Mobile No." id="" />

        <input type="text" name="" placeholder="LinkedIn" id="" />
        <a>
          <button className={styles.next_btn}>Save &#38; Next</button>
        </a>
        <p className={styles.info_text}>
          The provided information can be edited in future
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MentorForm;
