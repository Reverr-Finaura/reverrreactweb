import React, { useEffect, useState } from "react";
import ChatComponent from "../../components/chat/ChatComponent";
import { getClientMentorMsgs, getUserFromDatabase } from "../../firebase";

import styles from "./Chat.module.css";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [mentorMsgs, setMentorMsgs] = useState([]);
  const [random, setRandom] = useState(Math.random());

  const reRenderComponent = () => setRandom(Math.random());

  const fetchMentors = async () => {
    let result = await getUserFromDatabase("mauricerana@gmail.com");
    if (result !== null || undefined) {
      const results = [];
      for (let i = 0; i < result.mentors.length; i++) {
        let res = await getUserFromDatabase(result.mentors[i]);
        results.push(res);
      }
      setMentors(results);
    }
  };

  const fetchMentorMsgs = async () => {
    let results = await getClientMentorMsgs();
    setMentorMsgs(results);
  };

  useEffect(() => {
    fetchMentors();
    fetchMentorMsgs();
  }, [random]);

  console.log("MENTORS : ", mentors, "MENTORSMGS : ", mentorMsgs);

  return (
    <>
      <button
        className={styles["chat-button"]}
        onClick={() => {
          setShowChat(!showChat);
          reRenderComponent();
        }}
      >
        Chat
      </button>

      {showChat && (
        <ChatComponent
          mentorMsgs={mentorMsgs}
          mentors={mentors}
          onBlur={() => setShowChat(false)}
        />
      )}
    </>
  );
};

export default Chat;
