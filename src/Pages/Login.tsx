import React, { useState } from "react";
import "./Login.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      console.log("Login response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // =========================
      // SAVE TOKEN
      // =========================
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // =========================
      // SAVE USER
      // =========================
      // This handles both:
      // 1. { token: "...", user: { _id: "...", email: "..." } }
      // 2. { token: "...", _id: "...", email: "..." }
      const user = data.user || data;

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      // =========================
      // SAVE USER ID
      // =========================
      const userId = user?._id || user?.id || data.userId || data.id;

      if (userId) {
        localStorage.setItem("userId", userId);
        console.log("Saved userId:", userId);
      } else {
        console.log("User ID not found in login response:", data);
      }

      setSuccess("Login successful!");
      navigate("/home");

      // Optional: redirect after login
      // window.location.href = "/dashboard";
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="header">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            width: 420,
            p: 5,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome Back
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Enter your email and password
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 3,
                height: 48,
                fontWeight: 600,
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Box>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
            }}
          >
            <h4
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
                color: "skyblue",
                textDecoration: "none",
              }}
            >
              Register Here If Not Registered
            </h4>
          </Link>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
