import React from "react";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import logo1 from "../../assets/logo1.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/icons/search.svg";
import filters from "../../assets/icons/filters.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import preferences from "../../assets/icons/preferences.svg";
import help from "../../assets/icons/help.svg";
import ChatHistory from "./ChatHistory";

const drawerWidth = 310;

const Sidebar = ({ open, onClose, currentChat, setCurrentChat, setIsNewChat }) => {
  const handleNewChat = () => {

    // Set this as new chat
    setIsNewChat(true);

    // If on mobile, close the sidebar after creating new chat
    if (window.innerWidth <= 991) {
      onClose();
    }
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={window.innerWidth > 991 ? "permanent" : "temporary"}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          border: 0,
        },
      }}
    >
      <Box 
        sx={{ 
          p: 2, 
          bgcolor: "#FCFCFC", 
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo Section */}
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <img src={logo1} alt="Logo here" />
            <Typography variant="h6" bottom={0}>
              Logo here
            </Typography>
          </Box>

          {/* New chat button */}
           <Button
            variant="outlined"
            fullWidth
            onClick={handleNewChat}
            sx={{
              mb: 2,
              borderRadius: "10px",
              borderColor: "#007BFF",
              color: "#007BFF",
              background: "#007BFF1A",
              fontWeight: 600,
              textTransform: "capitalize",
              fontSize: 16,
              '&:hover': {
                borderColor: "#0056b3",
                background: "#007BFF2A",
              }
            }}
          >
            New Chat +
          </Button>

          {/* Search and Filter Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                cursor: "pointer",
                p: 1,
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <img src={search} alt="Search" />
            </Box>
            <Box
              component="div"
              sx={{
                cursor: "pointer",
                p: 1,
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <img src={filters} alt="Filter" />
            </Box>
          </Box>

          {/* Recent Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              mb: 1,
            }}
          >
            <Typography fontWeight={500} fontSize={18}>
              Recent
            </Typography>
            <Box
              component="div"
              sx={{
                cursor: "pointer",
                p: 1,
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <img src={arrowRight} alt="View all" />
            </Box>
          </Box>
        </div>

        {/* Chat History */}
        <ChatHistory 
          setCurrentChat={setCurrentChat} 
          currentChat={currentChat}
        />

        {/* Settings Section */}
        <div>
          <Box 
            sx={{ 
              borderRadius: "10px", 
              bgcolor: "white", 
              px: 1.5, 
              py: 1,
              mb: 2,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 500,
                p: 1,
                cursor: 'pointer',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <img src={preferences} alt="" style={{ width: 20, height: 20 }} />
              Preferences
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 500,
                p: 1,
                cursor: 'pointer',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <img src={help} alt="" style={{ width: 20, height: 20 }} />
              Help & Support
            </Box>
          </Box>

          {/* Plan Section */}
          <Box
            sx={{
              borderRadius: "10px",
              border: "1px solid #FD7E1433",
              bgcolor: "white",
              px: 1.5,
              py: 1,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(253,126,20,0.04)'
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                fontWeight: 500,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 500,
                }}
              >
                <img src={logo} alt="" style={{ width: 20, height: 20 }} />
                <div>
                  <Typography fontWeight={700} m={0}>
                    Basic Plan
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: "#6C757D", 
                      fontSize: 10,
                      lineHeight: 1.2 
                    }}
                  >
                    20/20 left credit
                  </Typography>
                </div>
              </Box>

              <Button
                sx={{
                  minWidth: 'auto',
                  fontSize: 12,
                  bgcolor: "#FD7E14",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  color: "white",
                  textTransform: 'capitalize',
                  '&:hover': {
                    bgcolor: "#e66a0a"
                  }
                }}
              >
                Upgrade
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </Drawer>
  );
};

export default Sidebar;