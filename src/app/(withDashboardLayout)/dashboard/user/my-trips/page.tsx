"use client";
import { useGetMyTripQuery } from "@/redux/api/tourApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  IconButton,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

const MyTrip = () => {
  const { data, isLoading } = useGetMyTripQuery("");

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit", id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log("Delete", id);
  };

  const columns: GridColDef[] = [
    {
      field: "photos",
      headerName: "Photo",
      flex: 1,
      renderCell: (params) => (
        <Image
          width={100}
          height={100}
          src={params.value.length > 0 ? params.value[0] : ""}
          alt="Trip Photo"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      ),
    },
    { field: "destination", headerName: "Destination", flex: 1 },
    { field: "budget", headerName: "Budget", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%", marginTop: 25 }}
        >
          <IconButton
            sx={{
              color: "primary.main",
            }}
            onClick={() => handleEdit(params.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "red",
            }}
            onClick={() => handleDelete(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <TextField size="medium" placeholder="Search Trips" />
      </Stack>
      <Typography
        color={"primary.main"}
        variant="h4"
        sx={{
          mb: 2,
        }}
        fontWeight={600}
      >
        My All Trips
      </Typography>
      {!isLoading ? (
        <Box>
          <Typography color={"primary.main"} variant="h4" fontWeight={600}>
            <DataGrid
              rows={data}
              rowHeight={100}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              autoHeight
            />
          </Typography>
        </Box>
      ) : (
        <Box sx={{ width: "100%", p: 4 }}>
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

export default MyTrip;
