import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import * as React from 'react'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Description from './Description/Description'
import Folder from './Folder/Folder'
import Submissions from './Submissions/Submissions'
import Discussions from './Discussions/Discussions'


function ProblemDescription() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{
      width: '100%',
      typography: 'body1',
      backgroundColor: 'primary.main',
      overflowY: 'auto',
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">

            <Tab label={<Tooltip title="Description"><ArticleOutlinedIcon /></Tooltip>} value="1" />

            <Tab label={<Tooltip title="Folder"><FolderCopyOutlinedIcon /></Tooltip>} value="2" />

            <Tab label={<Tooltip title="Submissions"><HistoryOutlinedIcon /></Tooltip>} value="3" />

            <Tab label={<Tooltip title="Discussions"><QuestionAnswerOutlinedIcon /></Tooltip>} value="4" />

          </TabList>
          <Box>
            <Tooltip title='Maximize'>
              <Button sx={{ p: 0, minWidth: 'unset', width: '20px' }}>
                <ZoomOutMapOutlinedIcon sx={{ color: '#8f8f8f' }} />
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <TabPanel sx={{ px: 2, py: 3 }} value="1"><Description /></TabPanel>
        <TabPanel sx={{ px: 2, py: 3 }} value="2"><Folder /></TabPanel>
        <TabPanel sx={{ px: 2, py: 3 }} value="3"><Submissions /></TabPanel>
        <TabPanel sx={{ px: 2, py: 3 }} value="4"><Discussions /></TabPanel>
      </TabContext>
    </Box>
  )
}

export default ProblemDescription