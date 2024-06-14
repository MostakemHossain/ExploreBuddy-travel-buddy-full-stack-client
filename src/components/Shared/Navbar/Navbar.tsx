"use client";
import ToggleSwitch from "@/components/ToggleButton/ToggleButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    {
      ssr: false,
    }
  );

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Tours", path: "/tours" },
    { title: "Contact Us", path: "/contact-us" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            sx={{ flexGrow: 1, color: "black", textDecoration: "none" }}
          >
            <Box component={"span"} color={"primary.main"}>
              E
            </Box>
            xplore{" "}
            <Box component={"span"} color={"primary.main"}>
              B
            </Box>
            uddy
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                <Box
                  sx={{
                    width: 250,
                  }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    {navLinks.map((link) => (
                      <ListItem
                        button
                        key={link.path}
                        component={Link}
                        href={link.path}
                      >
                        <ListItemText
                          primary={link.title}
                          primaryTypographyProps={{
                            color:
                              pathname === link.path
                                ? "primary.main"
                                : "text.primary",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  href={link.path}
                  sx={{
                    textDecoration: "none",
                    color:
                      pathname === link.path ? "primary.main" : "text.primary",
                  }}
                >
                  {link.title}
                </Typography>
              ))}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ToggleSwitch />
                <AuthButton />
              </Box>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
