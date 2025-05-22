import { Box, Typography, Grid, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

// MessagesSection component that serves as a section for sending messages to group members
// This component includes input fields for selecting a group, member name, and message content
const MessagesSection = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Message To</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>To Individual Member</Typography>
            <form>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select Group</InputLabel>
                <Select label="Select Group">
                  <MenuItem value="">Select Group</MenuItem>
                  <MenuItem value="alpha">Alpha</MenuItem>
                  <MenuItem value="beta">Beta</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Member Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                multiline
                rows={3}
                required
              />
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>To Group</Typography>
            <form>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select Group</InputLabel>
                <Select label="Select Group">
                  <MenuItem value="">Select Group</MenuItem>
                  <MenuItem value="alpha">Alpha</MenuItem>
                  <MenuItem value="beta">Beta</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Group Message"
                margin="normal"
                multiline
                rows={3}
                required
              />
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagesSection;