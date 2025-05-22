import { useState, useEffect } from 'react';
import { 
  Box, Typography, TextField, Table, TableBody, TableCell, TableHead, TableRow, Button,
  InputAdornment, IconButton, Chip, MenuItem, Select, FormControl, InputLabel, Pagination,
  useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { 
  Search as SearchIcon, 
  FilterList as FilterIcon,
  ArrowUpward as AscIcon,
  ArrowDownward as DescIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { members } from '../../../utils/data';

const MembersSection = ({ setSelectedMember, setShowMemberDialog }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [mobileFilters, setMobileFilters] = useState({
    status: 'all',
    sortBy: 'name',
    sortDir: 'asc'
  });

  const membersPerPage = 5;

  useEffect(() => {
    // Apply filters and sorting
    let result = [...members];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.mobile.includes(searchTerm) ||
        member.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(member => member.status === statusFilter);
    }
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredMembers(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, statusFilter, sortConfig]);

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * membersPerPage,
    currentPage * membersPerPage
  );

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const toggleMemberStatus = (memberId) => {
    console.log(`Toggled status for member ${memberId}`);
    // In a real app, you would update the member status in your state/API here
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleMobileFilterApply = () => {
    setStatusFilter(mobileFilters.status);
    setSortConfig({
      key: mobileFilters.sortBy,
      direction: mobileFilters.sortDir
    });
    setFilterDialogOpen(false);
  };

  const SortIndicator = ({ columnKey }) => (
    <>
      {sortConfig.key === columnKey && (
        sortConfig.direction === 'asc' ? <AscIcon fontSize="small" /> : <DescIcon fontSize="small" />
      )}
    </>
  );

  return (
    <Box sx={{ p: isMobile ? 1 : 3 }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'space-between',
        alignItems: isMobile ? 'stretch' : 'center',
        mb: 3,
        gap: 2
      }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          All Members
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          width: isMobile ? '100%' : 'auto'
        }}>
          <TextField
            fullWidth={isMobile}
            size="small"
            placeholder="Search members..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              minWidth: isMobile ? '100%' : 300,
              backgroundColor: 'background.paper'
            }}
          />
          
          {!isMobile ? (
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Statuses</MenuItem>
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <Button 
              variant="outlined" 
              startIcon={<FilterIcon />}
              onClick={() => setFilterDialogOpen(true)}
              sx={{ flexShrink: 0 }}
            >
              Filters
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ 
        overflowX: 'auto',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        mb: 3
      }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell 
                onClick={() => handleSort('name')}
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'action.hover' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Name
                  <SortIndicator columnKey="name" />
                </Box>
              </TableCell>
              <TableCell 
                onClick={() => handleSort('mobile')}
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'action.hover' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Mobile
                  <SortIndicator columnKey="mobile" />
                </Box>
              </TableCell>
              <TableCell 
                onClick={() => handleSort('status')}
                sx={{ 
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'action.hover' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Status
                  <SortIndicator columnKey="status" />
                </Box>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMembers.length > 0 ? (
              paginatedMembers.map((member) => (
                <TableRow key={member.id} hover>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.mobile}</TableCell>
                  <TableCell>
                    <Chip 
                      label={member.status === 'approved' ? 'Approved' : 'Pending'}
                      color={member.status === 'approved' ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{member.email || '-'}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color={member.status === 'approved' ? 'warning' : 'success'}
                        onClick={() => toggleMemberStatus(member.id)}
                      >
                        {member.status === 'approved' ? 'Revoke' : 'Approve'}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => {
                          setSelectedMember(member);
                          setShowMemberDialog(true);
                        }}
                      >
                        Details
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    No members found matching your criteria
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        gap: 2
      }}>
        <Typography variant="body2" color="text.secondary">
          Showing {paginatedMembers.length} of {filteredMembers.length} members
        </Typography>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          showFirstButton
          showLastButton
          siblingCount={isMobile ? 0 : 1}
        />
      </Box>

      {/* Mobile Filter Dialog */}
      <Dialog 
        open={filterDialogOpen} 
        onClose={() => setFilterDialogOpen(false)}
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          Filters
          <IconButton onClick={() => setFilterDialogOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={mobileFilters.status}
              label="Status"
              onChange={(e) => setMobileFilters(prev => ({
                ...prev,
                status: e.target.value
              }))}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={mobileFilters.sortBy}
              label="Sort By"
              onChange={(e) => setMobileFilters(prev => ({
                ...prev,
                sortBy: e.target.value
              }))}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="mobile">Mobile</MenuItem>
              <MenuItem value="status">Status</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl fullWidth>
            <InputLabel>Sort Direction</InputLabel>
            <Select
              value={mobileFilters.sortDir}
              label="Sort Direction"
              onChange={(e) => setMobileFilters(prev => ({
                ...prev,
                sortDir: e.target.value
              }))}
            >
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            variant="outlined" 
            onClick={() => setFilterDialogOpen(false)}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleMobileFilterApply}
          >
            Apply Filters
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MembersSection;