import Container from '@mui/material/Container'
import AppBar from '~/components/layout/AppBar/AppBar'
import ProblemsBar from './ProblemsBar/ProblemsBar'
import ProblemContent from './ProblemContent/ProblemContent'
import { useState, useRef } from 'react'

function Problems() {
  const [language, setLanguage] = useState('javascript')
  const editorRef = useRef(null)
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <ProblemsBar language={language} onSelect={setLanguage} />
      <ProblemContent language={language} editorRef={editorRef} />
    </Container>
  )
}

export default Problems