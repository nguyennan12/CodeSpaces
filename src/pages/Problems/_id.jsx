import Container from '@mui/material/Container'
import AppBar from '~/components/layout/AppBar/AppBar'
import ProblemsBar from './ProblemsBar/ProblemsBar'
import ProblemContent from './ProblemContent/ProblemContent'

function Problems() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <ProblemsBar />
      <ProblemContent />
    </Container>
  )
}

export default Problems