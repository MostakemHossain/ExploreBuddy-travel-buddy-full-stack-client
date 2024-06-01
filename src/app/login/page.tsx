import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
            padding: 4,
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "fantasy",
            }}
            component="h6"
            color={"primary.main"}
            variant="h4"
          >
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
              <Link
                style={{
                  color: "#1586FD",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                href="/forgot-password"
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <Box display="flex" justifyContent="flex-end">
              <Box sx={{}}>
                Don&apos;t have an account?{" "}
                <Link
                  style={{
                    color: "#1586FD",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    paddingLeft: "1px",
                  }}
                  href="/register"
                >
                  Sign Up
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
