"use client";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
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
        {userInfo?.userId ? (
          <Button color="error" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
