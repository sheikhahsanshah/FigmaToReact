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
const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={window.innerWidth > 991 ? "permanent" : "temporary"}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          // overflowY: "hidden",
          width: drawerWidth,
          boxSizing: "border-box",
          border: 0,
        },
      }}
    >
      <Box sx={{ p: 2, bgcolor: "#FCFCFC", height: "100vh" }}>
        <div>
          {/* Logo  */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <img src={logo1} alt="Logo here" />
            <Typography variant="h6" bottom={0}>
              Logo here
            </Typography>
          </Box>

          {/* New chat button  */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              my: 2,
              borderRadius: "10px",
              borderColor: "#007BFF",
              color: "#007BFF",
              background: "#007BFF1A",
              fontWeight: 600,
              textTransform: "capitalize",
              fontSize: 16,
            }}
          >
            New Chat +
          </Button>
        </div>

        {/* Icons  */}
        <Box
          sx={{
            my: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={search} alt="Search" style={{ cursor: "pointer" }} />
          <img src={filters} alt="Filter" style={{ cursor: "pointer" }} />
        </Box>

        {/* recent  */}
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
          <img src={arrowRight} alt="" />
        </Box>

        {/* chats history */}
        <ChatHistory />

        {/* Settings  */}
        <Box sx={{ borderRadius: "10px", bgcolor: "white", px: 1.5, py: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 500,
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
            }}
          >
            <img src={help} alt="" style={{ width: 20, height: 20 }} />
            Help & Support
          </Box>
        </Box>

        {/* Plan  */}
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid #FD7E1433",
            bgcolor: "white",
            px: 1,
            py: 0.75,
            mt: 2,
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
                <p style={{ color: "#6C757D", fontSize: 10 }}>
                  20/20 left credit
                </p>
              </div>
            </Box>

            <button
              style={{
                fontSize: 12,
                background: "#FD7E14",
                borderRadius: "6px",
                padding: "6px 10px",
                color: "white",
                border: 0,
              }}
            >
              Upgrade
            </button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
