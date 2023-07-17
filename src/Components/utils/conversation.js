import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { AttachFile } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { db, Storage } from "../../Auth/firebase";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import UserNavbar from "../Navbar/UserNavbar";
import users from "./users";
import { IconButton } from "@mui/material";

// Styled Components
const ConversationContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;

const Sidebar = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const ConversationItem = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "#f5f5f5")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  padding: 20px;
  background-color: #ffffff;
`;

const MessageItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const Sender = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background-color: #4caf50;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-top: 10px;
`;

function Conversation({ currentUser, sellingUser }) {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const senderId = urlParams.get("senderId");
    const receiverId = urlParams.get("receiverId");

    if (senderId && receiverId) {
      setSelectedConversation({ senderId, receiverId });
    }
  }, [location.search]);

  useEffect(() => {
    if (selectedConversation) {
      const unsubscribe = onSnapshot(
        query(
          collection(db, `users/${selectedConversation.receiverId}/messages`),
          orderBy("timestamp")
        ),
        (snapshot) => {
          const messagesData = snapshot.docs.map((doc) => doc.data());
          setMessages(messagesData);
        }
      );

      return () => unsubscribe();
    }
  }, [selectedConversation]);

  const handleSendMessage = async () => {
    if (!selectedConversation) {
      return;
    }

    if (newMessage.trim() === "" && !imageFile) {
      return;
    }

    const message = {
      senderId: currentUser.id,
      senderName: currentUser.name,
      text: newMessage,
      timestamp: new Date().toString(),
    };

    try {
      const docRef = await addDoc(
        collection(db, `users/${selectedConversation.receiverId}/messages`),
        message
      );

      if (imageFile) {
        const storageRef = ref(
          Storage,
          `propertyImages/${docRef.id}/${imageFile.name}`
        );

        const uploadTask = uploadBytes(storageRef, imageFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            toast.update(1, {
              render: `Uploading: ${progress.toFixed(2)}%`,
              progress: progress,
              type: toast.TYPE.INFO,
              autoClose: false,
            });
          },
          (error) => {
            console.error("Error uploading image:", error);
          },
          async () => {
            const imageURL = await getDownloadURL(storageRef);
            message.imageURL = imageURL;
            await updateDoc(
              doc(
                db,
                `users/${selectedConversation.receiverId}/messages`,
                docRef.id
              ),
              message
            );
            setNewMessage("");
            setImageFile(null);
            toast.update(1, {
              render: "Image uploaded successfully",
              type: toast.TYPE.SUCCESS,
              autoClose: 2000,
            });
          }
        );
      } else {
        await updateDoc(
          doc(
            db,
            `users/${selectedConversation.receiverId}/messages`,
            docRef.id
          ),
          message
        );
        setNewMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <>
      <UserNavbar />
      <ConversationContainer>
        <Sidebar>
          <h3
            style={{
              fontFamily: "cursive",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            All Chats
          </h3>
          <hr />
          {users.map((user) => (
            <ConversationItem
              key={user}
              selected={
                selectedConversation && selectedConversation.receiverId === user
              }
              onClick={() =>
                setSelectedConversation({
                  senderId: currentUser.id,
                  receiverId: user,
                })
              }
            >
              {user}
            </ConversationItem>
          ))}
        </Sidebar>

        {selectedConversation && (
          <ChatContainer>
            {messages.map((message, index) => (
              <MessageItem key={index}>
                <Sender>
                  {message.senderId === currentUser.id ? "You: " : ""}
                </Sender>
                <div>{message.text}</div>
                {message.imageURL && (
                  <ImageContainer>
                    <Image src={message.imageURL} alt="Sent Image" />
                  </ImageContainer>
                )}
              </MessageItem>
            ))}

            <InputContainer>
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <label htmlFor="image-upload">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <IconButton component="span">
                  <AttachFile />
                </IconButton>
              </label>
              <Button onClick={handleSendMessage}>
                <SendIcon />
                Send
              </Button>
            </InputContainer>
          </ChatContainer>
        )}
      </ConversationContainer>
    </>
  );
}

export default Conversation;
