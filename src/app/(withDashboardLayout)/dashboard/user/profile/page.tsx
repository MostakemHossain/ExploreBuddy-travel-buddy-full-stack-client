"use client";
import { useGetMyOwnProfileQuery } from "@/redux/api/myProfile";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const StylesInformationBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f7fe",
  borderRadius: theme.spacing(1),
  padding: "8px 16px",
  width: "40%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "33.33%",
  },
  "& p": {
    fontWeight: 600,
  },
}));

const MyProfile = () => {
  const { data, isLoading } = useGetMyOwnProfileQuery(undefined);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profileImage}
              height={300}
              width={400}
              alt="user photo"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" color={"primary.main"}>
            Basic Information
          </Typography>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            gap={2}
            flexWrap="wrap"
          >
            {data && (
              <>
                <StylesInformationBox>
                  <Typography color={"secondary"} variant="caption">
                    Role{" "}
                  </Typography>
                  <Typography>{data.role}</Typography>
                </StylesInformationBox>
                <StylesInformationBox>
                  <Typography color={"secondary"} variant="caption">
                    Name{" "}
                  </Typography>
                  <Typography>{data.name}</Typography>
                </StylesInformationBox>
                <StylesInformationBox>
                  <Typography color={"secondary"} variant="caption">
                    Email{" "}
                  </Typography>
                  <Typography>{data.email}</Typography>
                </StylesInformationBox>
                <StylesInformationBox>
                  <Typography color={"secondary"} variant="caption">
                    Status{" "}
                  </Typography>
                  <Typography color={"#119c34"}>{data.status}</Typography>
                </StylesInformationBox>
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProfile;
