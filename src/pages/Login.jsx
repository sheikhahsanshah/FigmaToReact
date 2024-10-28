import React, { Suspense, lazy, useState, useEffect } from "react";
import { Box, CircularProgress, CssBaseline, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "../components/Chat/Form";
import logo from "../assets/logo.svg";

const Login = lazy(() => import("../components/Login"));

const LoginPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width:992px)');
  const [mounted, setMounted] = useState(false);

  // Ensure hydration matches client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Suspense
        fallback={
          <Box
            sx={{
              p: 2,
              width: isDesktop ? "400px" : "100%",
              display: "grid",
              placeItems: "center",
              transition: "width 0.3s ease",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Login />
      </Suspense>

      {isDesktop && (
        <Suspense
          fallback={
            <Box
              sx={{
                p: 2,
                flexGrow: 1,
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                pt: "25%",
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Chat />
        </Suspense>
      )}
    </Box>
  );
};

const Chat = () => {
  return (
    <Box
      component="main"
      sx={{
        p: { xs: 1, sm: 2 },
        flexGrow: 1,
        height: "100vh",
        bgcolor: "transparent",
        transition: "padding 0.3s ease",
      }}
    >
      <Box
        sx={{
          height: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          border: "1px solid #E9ECEF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            py: { xs: 0.5, sm: 1 },
            px: { xs: 1, sm: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E9ECEF",
            transition: "all 0.3s ease",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              transition: "font-size 0.3s ease",
            }}
          >
            Welcome back
          </Typography>
          <img 
            src={logo} 
            alt="logo" 
            style={{ 
              width: 44,
              height: "auto",
              transition: "width 0.3s ease",
            }} 
          />
        </Box>

        {/* Chat Section */}
        <Box
          sx={{
            p: { xs: 1, sm: 2 },
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
            transition: "padding 0.3s ease",
          }}
        >
          <Box
            component="pre"
            sx={{
              p: { xs: 0.75, sm: 1 },
              bgcolor: "#f5f5f5",
              borderRadius: "10px",
              width: "fit-content",
              maxWidth: {
                xs: "100%",
                sm: "400px",
                md: "500px"
              },
              border: "1px solid #E9ECEF",
              textWrap: "wrap",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              transition: "all 0.3s ease",
            }}
          >
            Information for your ai asisstant: ex. AI personal assistants
            are advanced software programs that use artificial intelligence to
            perform daily personal tasks. They can operate as AI-powered text
            assistants, voice bots, or a combination of both. 
          </Box>
        </Box>

        {/* Message Input Section */}
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;