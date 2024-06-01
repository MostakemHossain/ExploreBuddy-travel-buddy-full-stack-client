"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box component={"span"} color={"primary.main"}>
            E
          </Box>
          xplore{" "}
          <Box component={"span"} color={"primary.main"}>
            B
          </Box>
          uddy
        </Typography>
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href="/consultation">
            About us
          </Typography>
          <Typography component={Link} href="/health-plans">
            Contact Us
          </Typography>
          <Typography component={Link} href="/medicine">
            DashBoard
          </Typography>
        </Stack>
        <Button>Login</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
