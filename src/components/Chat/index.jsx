import React, { useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import resize from "../../assets/icons/resize.svg";
import Form from "./Form";
import Messages from "./Messages";
import { Menu } from "@mui/icons-material";

const Chat = ({ setShowSidebar, currentChat, isNewChat = false }) => {
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
        height: "100%",
        width: "100%",
        bgcolor: "white",
      }}
    >
      {/* Header - Fixed */}
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
          flexShrink: 0, // Prevent header from shrinking
        }}
      >
        <Menu
          sx={{ cursor: "pointer" }}
          onClick={() => setShowSidebar((prev) => !prev)}
        />
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          {isNewChat ? "New Chat" : currentChat.title}
        </Typography>
        <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
      </Box>

      {/* Scrollable Messages Container */}
      <Box
        ref={scrollableDivRef}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
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
          // Add padding to prevent content from being hidden behind form
          pb: { xs: "80px", md: "100px" },
        }}
      >
        <Box 
          sx={{ 
            p: { xs: 2, md: 3 },
            width: "100%",
            height: isNewChat ? "100%" : "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: isNewChat ? "center" : "flex-start",
          }}
        >
          {isNewChat ? (
            <Box
              sx={{
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              <img src={logo} alt="logo" style={{ marginBottom: "24px" }} />
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                How can I help you today?
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Ask me anything! I'm here to help with your questions and tasks.
              </Typography>
            </Box>
          ) : (
            <Messages messages={currentChat.messages} />
          )}
        </Box>
      </Box>

      {/* Form - Fixed at bottom */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { xs: 0, md: isNewChat ? 0 : "400px" },
          right: 0,
          backgroundColor: "white",
          borderTop: "1px solid #E9ECEF",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
          zIndex: 10,
          transition: "left 0.3s ease",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 3 },
            width: "100%",
          }}
        >
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;