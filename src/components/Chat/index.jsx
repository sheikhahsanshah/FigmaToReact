import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import resize from "../../assets/icons/resize.svg";
import Form from "./Form";
import Messages from "./Messages";
import { Menu } from "@mui/icons-material";

const Chat = ({ setShowSidebar }) => {
  const scrollableDivRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      content: "Hello",
      role: "user",
      attachement: null,
      isAudio: false,
      createdAt: new Date(),
    },
    {
      content: "Hello! How can I help you today?",
      role: "assistant",
      attachement: null,
      isAudio: false,
      createdAt: new Date(),
    },
    {
      content: "Check this out",
      role: "user",
      attachement:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
      isAudio: false,
      createdAt: new Date(),
    },
    {
      content: "This is a background image.",
      role: "assistant",
      attachement: null,
      isAudio: false,
      createdAt: new Date(),
    },
    {
      content: null,
      role: "user",
      attachement:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
      isAudio: true,
      createdAt: new Date(),
    },
  ]);

  const scrollToBottom = () => {
    console.log(scrollableDivRef?.current?.scrollHeight);
    if (scrollableDivRef?.current) {
      scrollableDivRef.current.scrollTo(
        0,
        scrollableDivRef?.current?.scrollHeight
      );
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      component="main"
      sx={{
        p: 2,
        flexGrow: 1,
        height: "100%",
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          height: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          border: "1px solid #E9ECEF",
        }}
      >
        <Box
          sx={{
            py: 1,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E9ECEF",
          }}
        >
          {window.innerWidth > 990 ? (
            <img src={resize} alt="" />
          ) : (
            <Menu
              sx={{ cursor: "pointer" }}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          )}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Welcome back, John Doe
          </Typography>
          <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
        </Box>

        {/* Chat Section */}
        <Box
          ref={scrollableDivRef}
          sx={{
            p: 2,
            height: "calc(100% - 57px - 72px)",
            overflowY: "auto",
          }}
        >
          {messages.length === 0 ? (
            <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}>
              <img src={logo} alt="logo" />
            </Box>
          ) : (
            <Messages messages={messages} />
          )}
        </Box>

        {/* Message Input Section */}
        <Form />
      </Box>
    </Box>
  );
};

export default Chat;
