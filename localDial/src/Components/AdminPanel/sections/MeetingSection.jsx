import { Box, Typography, Paper, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

// MeetingSection component that serves as a section for creating team meetings
// This component includes input fields for meeting date, time, location, topic, guest name, and group selection
const MeetingSection = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Create Team Meeting</Typography>
      <Paper sx={{ p: 3 }}>
        <form>
          <TextField
            fullWidth
            label="Meeting Date"
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            label="Time"
            margin="normal"
            type="time"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            label="Location"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Topic"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Guest Name (optional)"
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Group</InputLabel>
            <Select label="Group" required>
              <MenuItem value="">--Select Group--</MenuItem>
              <MenuItem value="alpha">Alpha</MenuItem>
              <MenuItem value="beta">Beta</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Announce Meeting
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default MeetingSection;