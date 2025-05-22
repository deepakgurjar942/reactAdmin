import { Box, Typography, Paper, TextField, Button } from '@mui/material';


// NewGroupSection component that serves as a section for creating a new group
// This component includes input fields for group name, launch date, logo upload, and initial members
const NewGroupSection = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Create New Group</Typography>
      <Paper sx={{ p: 3 }}>
        <form>
          <TextField
            fullWidth
            label="Group Name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Launch Date"
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            fullWidth
            label="Upload Logo"
            margin="normal"
            type="file"
            InputLabelProps={{ shrink: true }}
          />
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>Initial Members</Typography>
          <TextField
            fullWidth
            label="Head Name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Co-head Name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Finance Head"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Secretary"
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Create Group
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default NewGroupSection;