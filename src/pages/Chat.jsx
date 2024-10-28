import React, { Suspense, lazy, useState, useEffect } from "react";
import { Box, CircularProgress, CssBaseline, useTheme, useMediaQuery } from "@mui/material";

const Chat = lazy(() => import("../components/Chat"));
const Sidebar = lazy(() => import("../components/Sidebar"));

const ChatPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:991px)');
  const [showSidebar, setShowSidebar] = useState(isDesktop);
  const [containerWidth, setContainerWidth] = useState(isDesktop ? "400px" : "100%");

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setContainerWidth(width > 991 ? "400px" : "100%");
      
      // Only auto-show sidebar on desktop
      if (width > 991) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to sync showSidebar with isDesktop
  useEffect(() => {
    setShowSidebar(isDesktop);
  }, [isDesktop]);

  const handleSidebarClose = () => {
    setShowSidebar(false);
  };

  return (
    <Box 
      sx={{ 
        display: "flex",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
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
            height: "100vh",
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
        />
      </Suspense>

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
            height: "100vh",
            overflow: "hidden",
            transition: "margin-left 0.3s ease",
            marginLeft: isDesktop && showSidebar ? containerWidth : 0,
          }}
        />
      </Suspense>

      {/* Overlay for mobile */}
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