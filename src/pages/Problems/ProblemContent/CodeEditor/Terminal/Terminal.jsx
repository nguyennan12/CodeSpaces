import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import TerminalIcon from '@mui/icons-material/Terminal'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import * as React from 'react'
import { executeCode } from '~/apis/services/compiler-code'
import '@fontsource/fira-code'


function Terminal({ language, editorRef }) {
  const [value, setValue] = React.useState('1')
  const [output, setOutput] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  // const toast = React.useToast()

  const { mode } = useColorScheme()
  const handleChange = (event, newValue) => { setValue(newValue) }

  const runCode = async () => {
    const srcCode = editorRef.current.getValue()
    if (!srcCode) return
    try {
      setIsLoading(true)
      const { run: result } = await executeCode(language, srcCode)
      setOutput(result.output)
    } catch (error) {
      // toast({
      //   title: 'An error occurred',
      //   description: error.message || 'Unable to run code',
      //   status: 'error',
      //   duration: 6000
      // })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Box sx={{ backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fffffe' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} >
                <TerminalIcon />
                <Typography sx={{ color: 'primary.contrastText', textTransform: 'none', fontWeight: '500' }}>Output</Typography>
              </Box>
            } value="1" />

            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }} >
                <CheckBoxOutlinedIcon />
                <Typography sx={{ color: 'primary.contrastText', textTransform: 'none', fontWeight: '500' }}>Testcase</Typography>
              </Box>
            } value="2" />
          </TabList>

          <Button
            variant='contained'
            sx={{
              gap: 1,
              background: mode === 'dark'
                ? 'linear-gradient(90deg, #0d6d08, #2cb92f, #8dd654)'
                : 'linear-gradient(90deg, #3465c8, #69aedc, #8acdde)',
              color: '#ffffff'
            }}
            // isLoading={isLoading}
            onClick={runCode}
          >
            <Typography noWrap sx={{ fontWeight: '500' }}>Run code</Typography>
          </Button>

        </Box>
        <TabPanel sx={{ px: 2, py: 3, fontFamily: 'monospaceyarn add @fontsource/jetbrains-mono' }} value="1">{output ? output : ''}</TabPanel>
        <TabPanel sx={{ px: 2, py: 3 }} value="2">Terminal</TabPanel>
      </TabContext >
    </Box >
  )
}

export default Terminal