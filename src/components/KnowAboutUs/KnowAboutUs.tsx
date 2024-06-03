import img from "@/assets/images/about.avif";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarRateIcon from "@mui/icons-material/StarRate";

import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

const App = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            color={"primary.main"}
            fontWeight={600}
            component="h1"
          >
            <StarRateIcon fontSize="inherit" /> Get To Know Us
          </Typography>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              p: 2,
            }}
            component="h2"
          >
            Travel place for You & your Family
          </Typography>
          <Typography variant="h5">100K+ Happy Customers</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mt: 2,
              mb: 2,
            }}
          >
            <AvatarGroup total={100}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              />
              <Avatar
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              />
            </AvatarGroup>
          </Box>
          <Typography variant="h5">
            We have more than 10 years of experience
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon
                  style={{
                    color: "#1586FD",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: 500,
                  color: "secondary.main",
                }}
                primary="Generation Technology"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon
                  style={{
                    color: "#1586FD",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: 500,
                  color: "secondary.main",
                }}
                primary="Innovative Solutions"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon
                  style={{
                    color: "#1586FD",
                    fontSize: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: 500,
                  color: "secondary.main",
                }}
                primary="Audio Performance"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src={img}
              layout="responsive"
              width={500}
              height={300}
              alt="Waiting for adventures"
              style={{ borderRadius: 8 }}
            />
            <Typography
              variant="h4"
              fontWeight={500}
              fontStyle={"oblique"}
              component="h3"
              align="center"
              mt={2}
            >
              Waiting for adventures? Don&apos;t miss them
            </Typography>
            <Typography variant="body1" align="center">
              We don&apos;t just work with concrete and steel. We are
              approachable, with even our highest concrete and steel. We work
              with people.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
