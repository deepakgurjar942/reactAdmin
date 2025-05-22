import { Box, Typography, Paper, Button } from '@mui/material';


// LogoutSection component that serves as a section for logging out
const LogoutSection = () => {
  const handleLogout = () => {
    alert('You have been logged out.');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Logout</Typography>
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Are you sure you want to logout?
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default LogoutSection;