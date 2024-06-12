"use client";
import { useGetALLTripRequestQuery } from "@/redux/api/tripRequest";
import { Box, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const RequestedTravelBuddy = () => {
  const { data, isLoading } = useGetALLTripRequestQuery("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const columns: GridColDef[] = [
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,
      renderCell: (params) => (
        <Box
          marginTop={2}
          marginBottom={2}
          sx={{ width: "100%", height: "100%" }}
        >
          <Typography>{params.row.trip.destination}</Typography>
        </Box>
      ),
    },
    {
      field: "budget",
      headerName: "Budget",
      flex: 1,
      renderCell: (params) => (
        <Box
          marginTop={2}
          marginBottom={2}
          sx={{ width: "100%", height: "100%" }}
        >
          <Typography>{params.row.trip.budget}</Typography>
        </Box>
      ),
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      renderCell: (params) => (
        <Box
          marginTop={2}
          marginBottom={2}
          sx={{ width: "100%", height: "100%" }}
        >
          <Typography>{params.row.trip.startDate}</Typography>
        </Box>
      ),
    },
    {
      field: "endDate",
      headerName: "End Date",
      flex: 1,
      renderCell: (params) => (
        <Box
          marginTop={2}
          marginBottom={2}
          sx={{ width: "100%", height: "100%" }}
        >
          <Typography>{params.row.trip.endDate}</Typography>
        </Box>
      ),
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        mb={2}
      >
        <TextField size="medium" placeholder="Search Trips" />
      </Stack>
      <Typography color="primary.main" variant="h4" fontWeight={600} mb={2}>
        Travel Buddy Request
      </Typography>

      {!isLoading ? (
        <Box>
          <DataGrid
            rows={data}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            autoHeight
          />
        </Box>
      ) : (
        <Box width="100%" p={4}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
    </Box>
  );
};

export default RequestedTravelBuddy;
