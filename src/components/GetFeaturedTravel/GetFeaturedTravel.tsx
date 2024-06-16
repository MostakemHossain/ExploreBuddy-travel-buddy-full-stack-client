"use client";
import { useGetALLApprovalTripRequestQuery } from "@/redux/api/tripRequest";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import TravelCard from "../TravelBookDetailsCard/TravelBookDetailsCard";

const GetFeaturedTravel = () => {
  const { data, isLoading } = useGetALLApprovalTripRequestQuery("");
  return (
    <div style={{ padding: "20px" }}>
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
      <Grid container spacing={3} justifyContent="center" alignItems={"center"}>
        {isLoading
          ? Array.from(new Array(3)).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton animation="wave" width="60%" />
                <Skeleton animation={false} width="80%" />
                <Skeleton animation={false} width="50%" />
              </Grid>
            ))
          : data?.map((trip: any, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <TravelCard trip={trip} />
              </Grid>
            ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          marginTop: "15px",
          justifyContent: "center",
        }}
      >
        <Button>See more</Button>
      </Box>
    </div>
  );
};

export default GetFeaturedTravel;
