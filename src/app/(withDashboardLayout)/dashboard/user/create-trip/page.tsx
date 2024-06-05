"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    detailedDescription: "",
    startDate: "",
    endDate: "",
    budget: "",
    activities: "",
    itinerary: "",
    travelType: "",
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { activities, itinerary, photos } = formData;
    const formattedData = {
      ...formData,
      budget: parseFloat(formData.budget),
      activities: activities.split(",").map((activity) => activity.trim()),
      itinerary: itinerary.split("\n").map((day) => day.trim()),
      photos: photos.split(",").map((photo) => photo.trim()),
    };
    console.log("Formatted JSON:", formattedData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Trip
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Detailed Description"
              name="detailedDescription"
              multiline
              rows={4}
              value={formData.detailedDescription}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Budget"
              name="budget"
              type="number"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Activities (comma-separated)"
              name="activities"
              value={formData.activities}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Itinerary (one per line)"
              name="itinerary"
              multiline
              rows={4}
              value={formData.itinerary}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="travelType-label">Travel Type</InputLabel>
            <Select
              fullWidth
              labelId="travelType-label"
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Travel Type</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Leisure">Leisure</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Business">Couple</MenuItem>
              <MenuItem value="Business">Others</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Photos (comma-separated)"
              name="photos"
              value={formData.photos}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default TripForm;
