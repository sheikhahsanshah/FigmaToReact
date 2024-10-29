import React, { Suspense, lazy, useState, useEffect } from "react";
import { Box, CircularProgress, CssBaseline, useTheme, useMediaQuery } from "@mui/material";

const Chat = lazy(() => import("../components/Chat"));
const Sidebar = lazy(() => import("../components/Sidebar"));

const ChatPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:991px)');
  const [showSidebar, setShowSidebar] = useState(true); // Always show sidebar initially
  const [containerWidth, setContainerWidth] = useState(isDesktop ? "400px" : "100%");
  const [isChatSelected, setIsChatSelected] = useState(isDesktop); // Only true by default on desktop
  
  const initialChat = {
    title: "What is the best way to learn React?",
    messages: [
      { role: "user", content: "What is the best way to learn React?" },
      { role: "assistant", content: "The best way to learn React includes:\n1. Understanding JavaScript fundamentals\n2. Following the official React documentation\n3. Building small projects\n4. Practicing with hooks and state management\n5. Working with real APIs" },
      { role: "user", content: "Can you suggest some good project ideas?" },
      { role: "assistant", content: "Here are some React project ideas:\n1. Todo application\n2. Weather app\n3. Shopping cart\n4. Social media dashboard\n5. Chat application" }
    ]
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
        setIsChatSelected(true);
      } else {
        // On mobile, show sidebar if no chat is selected
        setShowSidebar(!isChatSelected);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isChatSelected]);

  // Effect to sync sidebar state with desktop mode
  useEffect(() => {
    if (isDesktop) {
      setShowSidebar(true);
      setIsChatSelected(true);
    } else {
      // On mobile, revert to sidebar view if no chat is selected
      setShowSidebar(!isChatSelected);
    }
  }, [isDesktop]);

  const handleSidebarClose = () => {
    if (isChatSelected) {
      setShowSidebar(false);
    }
  };

  // Handle back to sidebar (for mobile)
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

      {(!isDesktop && !isChatSelected) ? null : (
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
            setShowSidebar={!isChatSelected ? undefined : setShowSidebar}
            sx={{
              flexGrow: 1,
              height: "100%",
              overflow: "hidden",
              transition: "margin-left 0.3s ease",
              marginLeft: isDesktop && showSidebar ? containerWidth : 0,
              display: (!isDesktop && !isChatSelected) ? 'none' : 'flex',
            }}
            currentChat={currentChat}
            onBackToSidebar={handleBackToSidebar}
          />
        </Suspense>
      )}

      {/* Overlay for mobile */}
      {!isDesktop && showSidebar && isChatSelected && (
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