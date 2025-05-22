// src/components/AdminPanel/sections/GroupsSection.js
import React from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { groups } from '../../../utils/data';

// GroupsSection component that displays a list of groups in a grid layout
// It accepts a prop to control the visibility of the group dialog
const GroupsSection = ({ setShowGroupDialog }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>All Groups</Typography>
      <Grid container spacing={3}>
        {groups.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group.id}>
            <Card>
              <CardActionArea onClick={() => setShowGroupDialog(true)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={group.image}
                  alt={group.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {group.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Members: {group.members}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GroupsSection;