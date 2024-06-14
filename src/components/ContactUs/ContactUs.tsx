import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "aos/dist/aos.css";
import Image from "next/image";

const ContactSection = () => {
  return (
    <Box
      sx={{
        p: 4,
        position: "relative",
        overflow: "hidden",
        m: { xs: 0, lg: 20 },
      }}
    >
      {/* Top Left Shape */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "#ff5722",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Top Right Shape */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "#00796b",
          borderRadius: "50%",
          transform: "translate(50%, -50%)",
        }}
      />
      {/* Bottom Left Shape */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "#d32f2f",
          borderRadius: "50%",
          transform: "translate(-50%, 50%)",
        }}
      />
      {/* Bottom Right Shape */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100px",
          height: "100px",
          backgroundColor: "#ff9800",
          borderRadius: "50%",
          transform: "translate(50%, 50%)",
        }}
      />

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Image
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
            alt="Contact Us"
            width={400}
            height={400}
            layout="responsive"
            style={{
              margin: "0 auto",
              display: "block",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
            Contact Us
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} data-aos="fade-up" data-aos-delay="100">
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  InputProps={{ style: { borderRadius: 20 } }}
                />
              </Grid>
              <Grid item xs={12} data-aos="fade-up" data-aos-delay="200">
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  InputProps={{ style: { borderRadius: 20 } }}
                />
              </Grid>
              <Grid item xs={12} data-aos="fade-up" data-aos-delay="300">
                <TextField
                  fullWidth
                  label="Phone No."
                  variant="outlined"
                  InputProps={{ style: { borderRadius: 20 } }}
                />
              </Grid>
              <Grid item xs={12} data-aos="fade-up" data-aos-delay="400">
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  InputProps={{ style: { borderRadius: 20 } }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ textAlign: { xs: "center", sm: "center" } }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    borderRadius: 20,
                    backgroundColor: "#ff5722",
                    color: "white",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    textTransform: "none",
                    width: { xs: "100%", sm: "auto", lg: "70%" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
