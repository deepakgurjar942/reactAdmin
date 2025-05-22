import { useState } from 'react'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import Sidebar from './components/Sidebar'
import MemberDialog from './components/MemberDialog'
import GroupDialog from './components/GroupDialog'
import GroupsSection from './sections/GroupsSection'
import MessagesSection from './sections/MessagesSection'
import MembersSection from './sections/MembersSections'
import NewGroupSection from './sections/NewGroupSection'
import MeetingSection from './sections/MeetingSection'
import ChangePasswordSection from './sections/ChangePasswordSection'
import LogoutSection from './sections/LogoutSection'

// AdminPanel component that serves as the main layout for the admin panel

const AdminPanel = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('groups')
  const [selectedMember, setSelectedMember] = useState(null)
  const [showMemberDialog, setShowMemberDialog] = useState(false)
  const [showGroupDialog, setShowGroupDialog] = useState(false)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  // Function to render the active section based on the selected section

  const renderSection = () => {
    switch (activeSection) {
      case 'groups': return <GroupsSection setShowGroupDialog={setShowGroupDialog} />
      case 'messages': return <MessagesSection />
      case 'members': return <MembersSection {...{ setSelectedMember, setShowMemberDialog }} />
      case 'newgroup': return <NewGroupSection />
      case 'meeting': return <MeetingSection />
      case 'change-password': return <ChangePasswordSection />
      case 'logout': return <LogoutSection />
      default: return <GroupsSection setShowGroupDialog={setShowGroupDialog} />
    }
  }
// Render the admin panel layout
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar {...{ activeSection, setActiveSection, mobileOpen, handleDrawerToggle, isMobile }} />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}>
        <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
          {renderSection()}
        </Container>
      </Box>

      <MemberDialog {...{ showMemberDialog, setShowMemberDialog, selectedMember }} />
      <GroupDialog {...{ showGroupDialog, setShowGroupDialog }} />
    </Box>
  )
}

export default AdminPanel