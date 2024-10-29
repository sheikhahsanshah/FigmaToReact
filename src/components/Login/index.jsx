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
  Alert,
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
  
  // Form state
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  
  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Error state
  const [errors, setErrors] = useState({
    identifier: "",
    password: "",
    general: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleCaptchaChange = (value) => setCaptchaVerified(!!value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Identifier validation (email or phone)
    if (!formData.identifier) {
      newErrors.identifier = "Email is required";
    } else if (formData.identifier.includes('@')) {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.identifier)) {
        newErrors.identifier = "Invalid email format";
      }
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (!captchaVerified) {
      setErrors(prev => ({
        ...prev,
        general: "Please complete the CAPTCHA verification"
      }));
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      history.push("/chat");
      
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: "Invalid email/phone or password"
      }));
    } finally {
      setIsLoading(false);
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

        {errors.general && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.general}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="identifier"
            label="Phone number or email"
            value={formData.identifier}
            onChange={handleChange}
            error={!!errors.identifier}
            helperText={errors.identifier}
            disabled={isLoading}
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
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            disabled={isLoading}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "hide the password" : "display the password"
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
            disabled={isLoading}
            sx={{
              my: 2,
              backgroundColor: "#007BFF",
              color: "#fff",
              "&.Mui-disabled": {
                backgroundColor: "#007BFF80",
                color: "#fff",
              },
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </SignInButton>

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
          Don't you have an account?{" "}
          <a href="#" style={{ color: "#007BFF" }}>
            Sign up
          </a>
        </Typography>
      </div>
    </Box>
  );
};

export default Login;