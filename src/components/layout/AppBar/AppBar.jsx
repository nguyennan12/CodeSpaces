import ClearIcon from '@mui/icons-material/Clear'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Prenium from './Menus/Prenium'
import Profiles from './Menus/Profiles'
import ModeSelect from '~/components/common/ModeSelect/ModeSelect'


function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{
      height: (theme) => theme.codesapces.appBarHeight,
      width: '100%',
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'primary.main'
    }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {/* logo icon */}
          <Typography variant='h6'>CodeSpaces</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant='text'>Home</Button>
          <Button variant='text'>Problems</Button>
          <Button variant='text'>Course</Button>
          <Button variant='text'>Blog</Button>
          <Prenium />
        </ Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'primary.contrastText' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <ClearIcon
                  sx={{
                    color: searchValue ? 'primary.contrastText' : 'transparent',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => { setSearchValue('') }}
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: '100px',
            display: { xs: 'none', md: 'flex' },
            '& input': { color: 'primary.contrastText' },
            '& label.Mui-focused': { color: 'primary.contrastText' },
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              '& input': { p: 0.875 },
              '& fieldset': { borderColor: 'primary.contrastText' },
              '&:hover fieldset': { borderColor: 'primary.contrastText' },
              '&.Mui-focused fieldset': { borderColor: 'primary.contrastText' }
            }
          }} />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon sx={{ color: 'primary.contrastText' }} />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>

    </Box >
  )
}

export default AppBar