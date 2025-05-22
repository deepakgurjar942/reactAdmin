// src/components/AdminPanel/components/MemberDialog.js
import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
// MemberDialog component that serves as a modal dialog for member details
const MemberDialog = ({ showMemberDialog, setShowMemberDialog, selectedMember }) => {
  if (!showMemberDialog) return null;

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
      onClick={() => setShowMemberDialog(false)}
    >
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
          <Typography variant="h5">Member Details</Typography>
          <IconButton onClick={() => setShowMemberDialog(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {selectedMember && (
          <Box>
            <Typography variant="h6">{selectedMember.name}</Typography>
            <Typography>Mobile: {selectedMember.mobile}</Typography>
            <Typography>
              Status: <span style={{ color: selectedMember.status === 'approved' ? 'green' : 'orange' }}>
                {selectedMember.status === 'approved' ? 'Approved' : 'Pending'}
              </span>
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default MemberDialog;