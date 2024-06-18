"use client";
import TravelCard from "@/components/TravelBookDetailsCard/TravelBookDetailsCard";
import { useGetALLApprovalTripRequestQuery } from "@/redux/api/tripRequest";
import { useDebounced } from "@/redux/hooks";
import {
  Box,
  Button,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const GetFeaturedTravel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const query: Record<string, any> = {};
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetALLApprovalTripRequestQuery({ ...query });

  return (
    <Box style={{ textAlign: "center", padding: "2rem" }}>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h3"
          color={"primary.main"}
          component="h1"
          gutterBottom
        >
          Explore the World Your Way
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Embrace the journey, conquer the unknown...
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search destinations, tours, adventures..."
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              style: { borderRadius: "50px" },
            }}
            sx={{
              width: {
                xs: "100%",
                md: "700px",
              },
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ padding: "20px" }}>
        {isLoading ? (
          <Stack>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Stack>
        ) : (
          <>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              {data?.slice(3, 9).map((trip: any, index: number) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <TravelCard trip={trip} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {data && data?.length && (
          <Box
            sx={{
              mt: 5,
            }}
          >
            {" "}
            <Link href={"/tour-page"}>
              <Button>See more</Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GetFeaturedTravel;
