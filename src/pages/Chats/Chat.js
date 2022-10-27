import React, { useState, useEffect } from "react";
import ChatComponent from "../../components/chat/ChatComponent";
import styles from "./Chat.module.css";
import { getUserFromDatabase } from "../../firebase";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <button
        className={styles["chat-button"]}
        onClick={() => {
          setShowChat(!showChat);
        }}
      >
        Chat
      </button>

      {showChat && <ChatComponent />}
    </>
  );
};

export default Chat;
