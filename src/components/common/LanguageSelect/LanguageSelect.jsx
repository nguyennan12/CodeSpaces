import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { LANGUAGES } from '~/apis/explore/language'
import { Tooltip } from '@mui/material'


function LanguageSelect({ language, onSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)

  }
  const handleSelected = (lang) => {
    onSelect(lang.id)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const selectedLang = LANGUAGES.find(l => l.id === language)

  return (
    <Box>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color: '#7d7d7d' }}
      >
        <img
          src={selectedLang.icon}
          alt={selectedLang.label}
          width={20}
          style={{ marginRight: 8 }}
        />
        {selectedLang?.label}
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button'
          }
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            maxHeight: 400,
            overflowY: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }
        }}
      >

        {LANGUAGES.map((lang) => (

          <MenuItem key={lang.id} onClick={() => handleSelected(lang)}>
            <Tooltip title={lang.version} placement="right" arrow >
              <Box sx={{ width: '100%' }}>
                <img
                  src={lang.icon}
                  alt={lang.label}
                  width={18}
                  style={{ marginRight: 8 }}
                />
                {lang.label}
              </Box>
            </Tooltip>

          </MenuItem>
        ))}
      </Menu>
    </Box>

  )
}

export default LanguageSelect