import Box from '@mui/material/Box'
function ProblemContent() {
  return (
    <Box sx={{
      height: (theme) => theme.codesapces.problemContentHeight,
      width: '100%',
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'primary.main'

    }}>

    </Box>
  )
}

export default ProblemContent