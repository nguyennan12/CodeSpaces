import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined'
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

function ProblemsBar() {
  return (
    <Box sx={{
      height: (theme) => theme.codesapces.problemdBarHeight,
      width: '100%',
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'inset 0 0 4px rgba(0,0,0,0.15)',
      overflowY: 'hidden',
      overflowX: 'auto',
      gap: 2,
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PlaylistPlayIcon sx={{ color: 'secondary.main' }} />
          <Typography
            variant='b1'
            noWrap
            sx={{
              fontWeight: 'bold',
              minWidth: 0,
              color: 'secondary.main'
            }}>Problem List</Typography>
        </Button>
        <Tooltip title='Prev Problem'>
          <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
            <KeyboardArrowLeftIcon size='large' />
          </Button>
        </Tooltip>
        <Tooltip title='Next Problem'>
          <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
            <KeyboardArrowRightIcon size='large' />
          </Button>
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
        <Tooltip title='Debug'>
          <Button variant='contained' sx={{ p: 0.75, minWidth: 'unset', width: '40px', color: '#ffca28', '&:hover': { backgroundColor: 'transparent' } }}>
            <PestControlOutlinedIcon />
          </Button>
        </Tooltip>
        <Tooltip title='Run'>
          <Button variant='contained' sx={{ p: 0.75, minWidth: 'unset', width: '40px', color: '#4fc3f7', '&:hover': { backgroundColor: 'transparent' } }}>
            <PlayArrowIcon />
          </Button>
        </Tooltip>
        <Tooltip title='Submit'>
          <Button variant='contained' sx={{ py: 0.75, px: 1, gap: 1, color: '#8bc34a', '&:hover': { backgroundColor: 'transparent' } }}>
            <BackupOutlinedIcon />
            <Typography sx={{ fontWeight: 'bold' }}>Submit</Typography>
          </Button>
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          backgroundColor: 'rgba(155, 155, 155, 0.1)',
          padding: 1,
          borderRadius: '8px'
        }}>
          <Tooltip title='Timer'>
            <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
              <AccessAlarmOutlinedIcon sx={{ color: '#8f8f8f' }} />
            </Button>
          </Tooltip>
          <Tooltip title='Invite'>
            <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
              <PersonAddAltOutlinedIcon sx={{ color: '#8f8f8f' }} />
            </Button>
          </Tooltip>
        </Box>
        <Tooltip title='Layouts'>
          <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
            <AutoAwesomeMosaicOutlinedIcon sx={{ color: '#8f8f8f' }} />
          </Button>
        </Tooltip>
        <Tooltip title='Setting'>
          <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
            <SettingsOutlinedIcon sx={{ color: '#8f8f8f' }} />
          </Button>
        </Tooltip>
        <Tooltip title='Ask AI'>
          <Button sx={{ p: 0, minWidth: 'unset', width: '24px' }}>
            <AutoAwesomeIcon sx={{ color: '#c670db' }} />
          </Button>
        </Tooltip>
      </Box>
    </Box >
  )
}

export default ProblemsBar