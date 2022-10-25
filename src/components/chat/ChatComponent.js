import React, { Suspense, useEffect, useRef, useState } from "react";
import styles from "./ChatComponent.module.css";

// import { updateMsgsInDatabase, uploadMedia } from "../../firebase/firebase";
import EmojiPicker from "emoji-picker-react";
import {
  addMsgsInDatabase,
  getMentorClientsDatabase,
  getUserFromDatabase,
  updateMsgsInDatabase,
  uploadMedia,
} from "../../firebase";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

const ChatComponent = ({ mentors, mentorMsgs }) => {
  const [selectedMentor, setSelectedMentor] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [clientMentorMsgs, setClientMentorMsgs] = useState(mentorMsgs);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const msgEndRef = useRef(null);

  const [newMsg, setNewMsg] = useState([]);

  // console.log(clientMsgs);
  // console.log(clientMentorMsgs);

  const sendMsg = async () => {
    // FOR SENDING FILE

    if (file) {
      console.log("FILE_SELECTED");
      console.log("FILE :", file);
      setIsLoading(true);

      let fileUrl = await uploadMedia(file, "Messages");
      var curClientData;

      if (selectedMentor.messages === null) {
        curClientData = {
          ...selectedMentor,
          messages: [
            {
              createdAt: new Date().toDateString(),
              msg: fileUrl,
              sendBy: "mauricerana@gmail.com",
              type: file.type,
            },
          ],
        };
      } else {
        curClientData = {
          ...selectedMentor,
          messages: [
            ...selectedMentor.messages,
            {
              createdAt: new Date().toDateString(),
              msg: fileUrl,
              sendBy: "mauricerana@gmail.com",
              type: file.type,
            },
          ],
        };
      }
      setSelectedMentor(curClientData);
      setIsLoading(false);

      var isExist;
      for (let i = 0; i < clientMentorMsgs.length; i++) {
        if (clientMentorMsgs[i].email == selectedMentor.email) {
          isExist = true;
          break;
        } else {
          isExist = false;
        }
      }
      if (isExist) {
        setClientMentorMsgs(
          clientMentorMsgs.map((data) => {
            if (data.email == selectedMentor.email) {
              return data, curClientData;
            } else {
              return data;
            }
          })
        );
        await updateMsgsInDatabase(selectedMentor.email, {
          messages: curClientData.messages,
        });
      } else {
        setClientMentorMsgs([...clientMentorMsgs, curClientData]);
        await addMsgsInDatabase(selectedMentor.email, {
          messages: curClientData.messages,
        });
      }
      setFile(null);
    } else {
      if (newMsg) {
        var curClientData;

        if (selectedMentor.messages === null) {
          curClientData = {
            ...selectedMentor,
            messages: [
              {
                createdAt: new Date().toDateString(),
                msg: newMsg,
                sendBy: "jatin.dsquare@gmail.com",
                type: "text",
              },
            ],
          };
        } else {
          curClientData = {
            ...selectedMentor,
            messages: [
              ...selectedMentor.messages,
              {
                createdAt: new Date().toDateString(),
                msg: newMsg,
                sendBy: "mauricerana@gmail.com",
                type: "text",
              },
            ],
          };
        }
        setSelectedMentor(curClientData);
        var isExist;
        for (let i = 0; i < clientMentorMsgs.length; i++) {
          if (clientMentorMsgs[i].email == selectedMentor.email) {
            isExist = true;
            break;
          } else {
            isExist = false;
          }
        }
        if (isExist) {
          setClientMentorMsgs(
            clientMentorMsgs.map((data) => {
              if (data.email == selectedMentor.email) {
                return data, curClientData;
              } else {
                return data;
              }
            })
          );
          await updateMsgsInDatabase(selectedMentor.email, {
            messages: curClientData.messages,
          });
        } else {
          setClientMentorMsgs([...clientMentorMsgs, curClientData]);
          await addMsgsInDatabase(selectedMentor.email, {
            messages: curClientData.messages,
          });
        }
        setNewMsg("");
      }
    }
  };

  const onEmojiClickHandler = (emojiObj) => {
    setNewMsg((prevInput) => prevInput + emojiObj.emoji);
    setShowEmojiPicker(false);
  };
  useEffect(() => {
    msgEndRef.current?.scrollIntoView();
  }, [newMsg, selectedMentor]);

  return (
    <>
      <div className={styles.chat}>
        <div className={styles["users-section"]}>
          <div className={styles["top-bar-users"]}>
            <img
              src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
              alt="profile"
              className={styles["mentor-profile"]}
            />
          </div>
          <div className={styles["user-profiles"]}>
            {mentors.map((client, index) => (
              <div
                key={index}
                onClick={() => {
                  var isEmailExist = false;
                  for (let i = 0; i < clientMentorMsgs.length; i++) {
                    if (clientMentorMsgs[i].email == client.email) {
                      isEmailExist = true;
                      break;
                    } else {
                      isEmailExist = false;
                    }
                  }

                  if (isEmailExist) {
                    clientMentorMsgs.map((data) => {
                      if (data.email == client.email) {
                        setSelectedMentor({
                          image: client.image,
                          name: client.name,
                          ...data,
                        });
                      }
                    });
                  } else {
                    setSelectedMentor({
                      image: client.image,
                      name: client.name,
                      email: client.email,
                      messages: null,
                    });
                  }
                }}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles["chat-section"]}>
          <div className={styles["top-bar"]}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {selectedMentor.length === 0 ? null : (
                <img
                  src={selectedMentor.image}
                  alt="profile"
                  className={styles.profile}
                />
              )}
              {selectedMentor ? <h3>{selectedMentor.name}</h3> : null}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="images/add.png" alt="add" className={styles.add} />
              <img
                src={"images/options.png"}
                alt="add"
                className={styles.options}
              />
            </div>
          </div>

          <div className={styles["chat-area"]} id="chat-area">
            {selectedMentor?.messages ? (
              selectedMentor.messages.map((curMsg) => {
                if (curMsg.type == "text") {
                  return (
                    <>
                      <h4
                        className={
                          curMsg.sendBy == "mauricerana@gmail.com"
                            ? styles["mentor-h4"]
                            : styles["client-h4"]
                        }
                      >
                        {curMsg?.msg}
                      </h4>
                    </>
                  );
                } else if (
                  curMsg.type == "image/jpeg" ||
                  curMsg.type == "image/png"
                ) {
                  return (
                    <>
                      <a
                        href={curMsg.msg}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          curMsg.sendBy == "mauricerana@gmail.com"
                            ? styles["mentor-img"]
                            : styles["client-img"]
                        }
                      >
                        <img
                          src={curMsg.msg}
                          alt="img"
                          style={{
                            width: "50%",
                            border: "2px solid #b9ceef",
                            borderRadius: "10px",
                          }}
                        />
                      </a>
                    </>
                  );
                } else {
                  return (
                    <a
                      href={curMsg.msg}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        curMsg.sendBy == "mauricerana@gmail.com"
                          ? styles["mentor-img"]
                          : styles["client-img"]
                      }
                    >
                      <img
                        src="/images/doc.png"
                        alt="doc"
                        style={{
                          width: "50%",
                          border: "2px solid transparent",
                          borderRadius: "10px",
                        }}
                      />
                    </a>
                  );
                }
              })
            ) : selectedMentor?.messages === null ? (
              <h3 style={{ color: "grey", textAlign: "center" }}>
                No Conversation yet!
              </h3>
            ) : (
              <h3 className={styles["chat-area__message"]}>
                Select a client first
                <br />
                to start chatting
              </h3>
            )}

            <div ref={msgEndRef} />
            {isLoading ? (
              <h5
                style={{ position: "absolute", right: "2rem", bottom: "15%" }}
              >
                SENDING FILE...
              </h5>
            ) : null}
          </div>

          <div className={styles["bottom-bar"]}>
            <label htmlFor="file">
              <img
                src={"/images/attachment.png"}
                alt="attachment"
                className={styles.attachment}
                style={
                  selectedMentor.length === 0 ? { cursor: "no-drop" } : null
                }
              />
            </label>
            <input
              onInput={(e) => {
                setFile(e.target.files[0]);
                toast.success('File selected, press "Enter ↩" to send');
              }}
              type="file"
              id="file"
              style={{ display: "none" }}
              disabled={selectedMentor.length === 0 ? true : false}
            />
            <img
              src={"/images/emoji.png"}
              alt="emoji"
              className={styles.emoji}
              onClick={() => {
                if (selectedMentor.length === 0) {
                  return;
                }
                setShowEmojiPicker(!showEmojiPicker);
              }}
              style={selectedMentor.length === 0 ? { cursor: "no-drop" } : null}
            />
            <input
              value={newMsg}
              type="text"
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  if (file === null) {
                    if (!newMsg.replace(/\s/g, "").length) {
                      toast.error("Enter atleast one character");
                      return;
                    }
                  }
                  sendMsg();
                }
              }}
              onChange={(e) => setNewMsg(e.target.value)}
              placeholder="Message"
              className={styles["message-input"]}
              disabled={selectedMentor.length === 0 ? true : false}
              style={selectedMentor.length === 0 ? { cursor: "no-drop" } : null}
            />
          </div>
        </div>
      </div>
      {showEmojiPicker && (
        <div className={styles["emoji-picker"]}>
          <EmojiPicker onEmojiClick={onEmojiClickHandler} width={300} />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default ChatComponent;
