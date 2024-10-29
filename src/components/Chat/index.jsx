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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        bgcolor: "white",
        overflow: "hidden", // Prevent horizontal scroll
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
          position: "sticky",
          top: 0,
          zIndex: 10,
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
          flex: 1,
          overflowY: "auto",
          width: "100%",
          backgroundColor: "white",
          pb: { xs: "80px", md: "100px" },
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
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          {currentChat.messages.length === 0 ? (
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                height: "calc(100vh - 200px)",
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

      {/* Form Section - Fixed at bottom with correct width */}
      <Box
        sx={{
          position: "absolute", // Changed from fixed to absolute
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTop: "1px solid #E9ECEF",
          zIndex: 10,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
          width: "100%", // This ensures it takes parent width
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
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