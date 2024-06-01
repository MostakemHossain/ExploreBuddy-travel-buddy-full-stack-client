import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";

const RegisterForm = () => {
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
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Box display="flex" justifyContent="flex-end">
              <Box sx={{}}>
                Already have an account?{" "}
                <Link
                  style={{
                    color: "#1586FD",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    paddingLeft: "1px",
                  }}
                  href="login"
                >
                  Sign in
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
