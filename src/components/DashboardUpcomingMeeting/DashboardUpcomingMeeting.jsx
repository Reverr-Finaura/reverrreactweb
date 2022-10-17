import React from "react";
import styles from "./DashboardUpcomingMeeting.module.css";

function DashboardUpcomingMeeting({ meeting }) {
  return (
    <div className={styles.meeting}>
      <img src="/images/meeting.png" alt="" />
      <div className={styles.meeting_info}>
        <h5>Connect with {meeting.email}</h5>
        <p>{meeting.time}</p>
      </div>
    </div>
  );
}

export default DashboardUpcomingMeeting;
