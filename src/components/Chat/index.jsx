import React, { useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import resize from "../../assets/icons/resize.svg";
import Form from "./Form";
import Messages from "./Messages";
import { Menu } from "@mui/icons-material";

const Chat = ({ setShowSidebar, currentChat, isNewChat=false, isDesktop }) => {
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

  const HEADER_HEIGHT = "64px";
  const FORM_HEIGHT = "80px";

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: HEADER_HEIGHT,
          py: 1.5,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E9ECEF",
          backgroundColor: "white",
          width: "100%",
          position: "fixed",
          top: 0,
          right: 0,
          paddingLeft: isDesktop ? "320px" : "5%",
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
          marginBottom: FORM_HEIGHT,
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
            marginTop:"64px",
            minHeight: isNewChat ? `calc(100vh - ${HEADER_HEIGHT} - ${FORM_HEIGHT})` : "auto",
          }}
        >
          {(isNewChat || currentChat === "NewChat") ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 3,
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
            currentChat.messages.length === 0 ? (
              <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  minHeight: `calc(100vh - ${HEADER_HEIGHT} - ${FORM_HEIGHT})`,
                }}
              >
                <img src={logo} alt="logo" />
              </Box>
            ) : (
              <Messages messages={currentChat.messages} />
            )
          )}
        </Box>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: isDesktop ? "310px" : 0,
          right: 0,
          height: FORM_HEIGHT,
          backgroundColor: "white",
          borderTop: "1px solid #E9ECEF",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
          zIndex: 10,
          transition: "left 0.3s ease",
        }}
      >
        <Box
          sx={{
            height: "100%",
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