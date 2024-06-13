"use client";
import { useGetALLApprovalTripRequestQuery } from "@/redux/api/tripRequest";
import { Grid, Skeleton, Typography } from "@mui/material";
import TravelCard from "../TravelBookDetailsCard/TravelBookDetailsCard";

const GetFeaturedTravel = () => {
  const { data, isLoading } = useGetALLApprovalTripRequestQuery("");
  return (
    <div style={{ padding: "150px" }}>
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
      <Grid container spacing={3}>
        <Grid container spacing={2} p={4}>
          {isLoading
            ? Array.from(new Array(3)).map((_, index) => (
                <Grid item key={index} xs={12} sm={6}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                  <Skeleton animation={false} />
                </Grid>
              ))
            : data?.map((trip: any, index: number) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <TravelCard trip={trip} />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default GetFeaturedTravel;
