"use client";
import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    {
      ssr: false,
    }
  );
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
          <Typography component={Link} href="/about">
            About us
          </Typography>
          <Typography component={Link} href="/contact-us">
            Contact Us
          </Typography>
          <Typography component={Link} href="/dashboard">
            Dashboard
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
