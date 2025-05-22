// src/components/AdminPanel/components/GroupDialog.js
import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// GroupDialog component that serves as a modal dialog for group details

const GroupDialog = ({ showGroupDialog, setShowGroupDialog }) => {
  if (!showGroupDialog) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300
      }}
      onClick={() => setShowGroupDialog(false)}
    >
      {/* Paper component from Material-UI to create a modal dialog */}
      <Paper
        sx={{
          width: '80%',
          maxWidth: 800,
          maxHeight: '80%',
          overflow: 'auto',
          p: 3
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h5">Group Details</Typography>
          <IconButton onClick={() => setShowGroupDialog(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Group details content here */}
      </Paper>
    </Box>
  );
};

export default GroupDialog;