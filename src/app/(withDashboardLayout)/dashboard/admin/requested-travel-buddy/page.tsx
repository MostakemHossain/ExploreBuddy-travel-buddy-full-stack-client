"use client";
import { useGetALLTripRequestQuery } from "@/redux/api/tripRequest";
import { Box, Skeleton, Stack, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMemo, useState } from "react";

const RequestedTravelBuddy = () => {
  const { data, isLoading } = useGetALLTripRequestQuery("");

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const rows = useMemo(() => {
    if (!data) return [];
    return data.map((item: any, index: number) => ({
      id: index,
      destination: item.trip.destination,
      budget: item.trip.budget,
      startDate: item.trip.startDate,
      endDate: item.trip.endDate,
      status: item.status,
    }));
  }, [data]);

  const columns: GridColDef[] = [
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,
      sortable: true,
    },
    { field: "budget", headerName: "Budget", flex: 1, sortable: true },
    { field: "startDate", headerName: "Start Date", flex: 1, sortable: true },
    { field: "endDate", headerName: "End Date", flex: 1, sortable: true },
    { field: "status", headerName: "Status", flex: 1, sortable: true },
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
            rows={rows}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            autoHeight
            sortingOrder={["asc", "desc"]}
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
