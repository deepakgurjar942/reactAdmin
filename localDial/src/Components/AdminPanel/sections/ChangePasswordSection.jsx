import { useState } from 'react';
import { Box, Typography, Paper, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// ChangePasswordSection component that serves as a section for changing the password
// This component includes input fields for current password, new password, and confirm password
const ChangePasswordSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password visibility toggle
  // This function toggles the visibility of the password input fields
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Change Password</Typography>
      <Paper sx={{ p: 3 }}>
        <form>
          <TextField
            fullWidth
            label="Current Password"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            fullWidth
            label="New Password"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Update Password
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ChangePasswordSection;