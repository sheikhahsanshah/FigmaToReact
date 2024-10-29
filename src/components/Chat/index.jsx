import React, { useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import resize from "../../assets/icons/resize.svg";
import Form from "./Form";
import Messages from "./Messages";
import { Menu } from "@mui/icons-material";

const Chat = ({ setShowSidebar, currentChat }) => {
  const scrollableDivRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollableDivRef?.current) {
      scrollableDivRef.current.scrollTo({
        top: scrollableDivRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "white",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          py: 1.5,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E9ECEF",
          backgroundColor: "white",
          minHeight: "64px",
          width: "100%",
        }}
      >
        {window.innerWidth > 990 ? (
          <img src={resize} alt="" style={{ cursor: "pointer" }} />
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
          {currentChat.title}
        </Typography>
        <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
      </Box>

      {/* Messages Section */}
      <Box
        ref={scrollableDivRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          width: "100%",
          display: "flex",
          backgroundColor: "white",
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Box 
          sx={{ 
            p: { xs: 2, md: 3 },
            width: "100%",
            maxWidth: "100%", // Changed from 1000px to 100%
            margin: "0 auto",
            flex: 1,
          }}
        >
          {currentChat.messages.length === 0 ? (
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                height: "100%",
                minHeight: "200px"
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
          ) : (
            <Messages messages={currentChat.messages} />
          )}
        </Box>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderTop: "1px solid #E9ECEF",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%", // Changed from 1000px to 100%
            margin: "0 auto",
            p: { xs: 2, md: 3 },
          }}
        >
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;