import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });

      console.log("Registered user:", data);

      setTimeout(() => {
        navigate("/");
      }, 2000);
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ width: 600, p: 5, borderRadius: 3 }} elevation={12}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Create Account
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                  />
                </Grid>

                <Grid size={12}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                </Grid>

                <Grid size={12}>
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    value={form.password}
                    onChange={handleChange("password")}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    value={form.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    label="Address"
                    fullWidth
                    value={form.address}
                    onChange={handleChange("address")}
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{ mt: 3, height: 48 }}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Box>
          <Link
            to="/"
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
              Login Here If Already Registered
            </h4>
          </Link>
        </Paper>
      </Box>
    </div>
  );
};

export default Register;
