import React, { Suspense, lazy, useState, useEffect } from "react";
import { Box, CircularProgress, CssBaseline, useTheme, useMediaQuery } from "@mui/material";

const Chat = lazy(() => import("../components/Chat"));
const Sidebar = lazy(() => import("../components/Sidebar"));

const ChatPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:991px)');
  const [showSidebar, setShowSidebar] = useState(isDesktop); // Only show sidebar initially on desktop
  const [containerWidth, setContainerWidth] = useState(isDesktop ? "400px" : "100%");
  const [isChatSelected, setIsChatSelected] = useState(false); // Start with no chat selected
  
  const initialChat = {
    title: "New Chat",
    messages: [], // Empty messages for new chat
  };
  
  const [currentChat, setCurrentChat] = useState(initialChat);

  // Handle chat selection
  const handleChatSelection = (chat) => {
    setCurrentChat(chat);
    if (!isDesktop) {
      setShowSidebar(false);
      setIsChatSelected(true);
    }
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setContainerWidth(width > 991 ? "400px" : "100%");
      
      if (width > 991) {
        setShowSidebar(true);
        setIsChatSelected(false);
      } else {
        setShowSidebar(false);
        setIsChatSelected(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to sync sidebar state with desktop mode
  useEffect(() => {
    if (isDesktop) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [isDesktop]);

  const handleSidebarClose = () => {
    if (isChatSelected || !isDesktop) {
      setShowSidebar(false);
    }
  };

  const handleBackToSidebar = () => {
    if (!isDesktop) {
      setShowSidebar(true);
      setIsChatSelected(false);
    }
  };

  return (
    <Box 
      sx={{ 
        display: "flex",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <CssBaseline />

      {/* Sidebar */}
      <Suspense
        fallback={
          isDesktop && (
            <Box
              sx={{
                p: 2,
                width: containerWidth,
                display: "grid",
                placeItems: "center",
                transition: "width 0.3s ease",
              }}
            >
              <CircularProgress />
            </Box>
          )
        }
      >
        <Sidebar 
          open={showSidebar} 
          onClose={handleSidebarClose}
          sx={{
            width: containerWidth,
            position: isDesktop ? "relative" : "fixed",
            height: "100%",
            zIndex: theme.zIndex.drawer,
            transition: "all 0.3s ease",
            transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
            backgroundColor: "background.paper",
            boxShadow: isDesktop ? "none" : theme.shadows[4],
            '& .MuiDrawer-paper': {
              width: containerWidth,
              position: "static",
            },
          }}
          currentChat={currentChat}
          setCurrentChat={handleChatSelection}
        />
      </Suspense>

      {/* Chat Area */}
      <Suspense
        fallback={
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Chat 
          setShowSidebar={setShowSidebar}
          sx={{
            flexGrow: 1,
            height: "100%",
            overflow: "hidden",
            transition: "margin-left 0.3s ease",
            marginLeft: isDesktop && showSidebar ? containerWidth : 0,
          }}
          currentChat={currentChat}
          onBackToSidebar={handleBackToSidebar}
          isNewChat={!isChatSelected && currentChat.messages.length === 0}
          isDesktop={isDesktop}
        />
      </Suspense>

      {/* Mobile Overlay */}
      {!isDesktop && showSidebar && (
        <Box
          onClick={handleSidebarClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: theme.zIndex.drawer - 1,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </Box>
  );
};

export default ChatPage;