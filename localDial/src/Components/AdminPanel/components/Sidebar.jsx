
import { 
  Box, 
  Drawer, 
  Toolbar, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography 
} from '@mui/material';
// Importing Material-UI components for styling and layout
import {
  People as PeopleIcon,
  Email as EmailIcon,
  PersonAdd as PersonAddIcon,
  Event as EventIcon,
  Settings as SettingsIcon,
  VpnKey as VpnKeyIcon,
  ExitToApp as ExitToAppIcon
} from '@mui/icons-material';
// Sidebar component that serves as the navigation drawer for the admin panel
const Sidebar = ({ activeSection, setActiveSection, mobileOpen, handleDrawerToggle, isMobile }) => {
  const menuItems = [
    { text: 'All Groups', icon: <PeopleIcon />, section: 'groups' },
    { text: 'Message To', icon: <EmailIcon />, section: 'messages' },
    { text: 'All Members', icon: <PeopleIcon />, section: 'members' },
    { text: 'Create New Group', icon: <PersonAddIcon />, section: 'newgroup' },
    { text: 'Create Team Meeting', icon: <EventIcon />, section: 'meeting' },
    { text: 'Change Password', icon: <VpnKeyIcon />, section: 'change-password' },
    { text: 'Logout', icon: <ExitToAppIcon />, section: 'logout' }
  ];

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 }}}
      aria-label="mailbox folders"
    >
      // Drawer component from Material-UI
      
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <div >
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, }}>
            <img src="https://picsum.photos/50" alt="Admin Logo" style={{ marginRight: 10 }} />
            <Typography variant="h6" noWrap>
              LocalDial
            </Typography>
          </Toolbar>
          <List
          sx={{cursor: 'pointer'}}
          >
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                selected={activeSection === item.section}
                onClick={() => setActiveSection(item.section)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Sidebar;