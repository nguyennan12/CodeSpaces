import Box from '@mui/material/Box'
import Split from 'react-split'
import '~/assets/styles/split.css'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import CodeEditor from './CodeEditor/CodeEditor'

function ProblemContent() {
  return (
    <Box sx={{
      height: (theme) => theme.codesapces.problemContentHeight,
      width: '100%'
    }}>
      <Split
        class="split"
        sizes={[40, 60]}
        minSize={300}
        gutterSize={8}
      >
        <ProblemDescription />
        <CodeEditor />
      </Split>
    </Box>
  )
}

export default ProblemContent