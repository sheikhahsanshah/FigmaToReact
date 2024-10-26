import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import apple from "../../assets/icons/apple.svg";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";

const SignInButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  backgroundColor: "#007BFF0F",
  color: "black",
  borderRadius: "10px",
  padding: "8px 16px",
  textTransform: "capitalize",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
});

const Login = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleCaptchaChange = (value) => setCaptchaVerified(!!value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      history.push("/chat");
    } else {
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        width: window.innerWidth > 991 ? "400px" : "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>
        <Typography variant="h6" align="center" marginBottom={3}>
          Sign in to your account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Phone number or email"
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "white",
                borderColor: "#E9ECEF",
                "&:hover": {
                  borderColor: "#E9ECEF",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 0.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "white",
                borderColor: "#E9ECEF",
                "&:hover": {
                  borderColor: "#E9ECEF",
                },
              },
            }}
          />
          <Box textAlign={"end"}>
            <a
              href="#"
              style={{ color: "#007BFF", textDecoration: "none", fontSize: 14 }}
            >
              Forgot password?
            </a>
          </Box>
          <SignInButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: 2,
              backgroundColor: "#007BFF",
              color: "#fff",
            }}
          >
            Sign in
          </SignInButton>
          
          {/* CAPTCHA Component */}
          <ReCAPTCHA
            sitekey="6LcmJm0qAAAAAGtjiPS-Tm9fKUOA6SDS-c-xJanR"
            onChange={handleCaptchaChange}
            style={{ marginTop: "16px", marginLeft: "25px" }} 
          />
        </form>

        <Divider textAlign="center" sx={{ color: "#6C757D", mb: 2 }}>
          OR
        </Divider>
        <Box>
          <SignInButton focusRipple={false} fullWidth variant="contained">
            <img src={apple} alt="apple" style={{ width: 22 }} />
            Sign in with Apple ID
          </SignInButton>
          <SignInButton
            sx={{ my: 1.5 }}
            focusRipple={false}
            fullWidth
            variant="contained"
          >
            <img src={google} alt="google" style={{ width: 20 }} />
            Sign in with Google
          </SignInButton>
          <SignInButton focusRipple={false} fullWidth variant="contained">
            <img src={facebook} alt="facebook" style={{ width: 20 }} />
            Sign in with Facebook
          </SignInButton>
        </Box>
        <Typography
          marginTop={1}
          textAlign="center"
          fontWeight={500}
          fontSize={"14px"}
        >
          Don’t you have an account?{" "}
          <a href="#" style={{ color: "#007BFF" }}>
            Sign up
          </a>
        </Typography>
      </div>
    </Box>
  );
};

export default Login;
