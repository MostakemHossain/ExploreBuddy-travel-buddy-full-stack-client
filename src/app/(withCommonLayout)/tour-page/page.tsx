"use client";
import TravelCard from "@/components/TravelBookDetailsCard/TravelBookDetailsCard";
import { useGetALLApprovalTripRequestQuery } from "@/redux/api/tripRequest";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const loadingContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const loadingCircle = {
  width: "20px",
  height: "20px",
  backgroundColor: "#3498db",
  borderRadius: "50%",
  margin: "0 5px",
};

const loadingCircleVariants = {
  start: {
    scale: 0.8,
    opacity: 0.5,
  },
  end: {
    scale: 1.2,
    opacity: 1,
    transition: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const TourPage = () => {
  const { data, isLoading } = useGetALLApprovalTripRequestQuery("");

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      {isLoading ? (
        <Box sx={loadingContainer}>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            initial="start"
            animate="end"
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            initial="start"
            animate="end"
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            initial="start"
            animate="end"
          />
        </Box>
      ) : (
        <>
          <Typography
            sx={{
              textAlign: "center",
              m: 3,
            }}
            variant="h4"
            fontWeight={600}
            gutterBottom
          >
            The journey of a thousand miles begins with a single step.
          </Typography>
          <Typography
            fontWeight={600}
            sx={{
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            Your gateway to unforgettable adventures.
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {data?.map((trip: any, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <TravelCard trip={trip} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default TourPage;
