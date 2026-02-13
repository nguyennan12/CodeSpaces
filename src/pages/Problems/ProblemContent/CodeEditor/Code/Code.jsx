import Box from '@mui/material/Box'
import Editor from '@monaco-editor/react'
import { useState, useRef, useEffect } from 'react'
import { findSelectedLanguage } from '~/utils/findSelectedLanguage'
import { useColorScheme } from '@mui/material/styles'

function Code({ language }) {

  const editorRef = useRef(null)
  const [codeValue, setCodeValue] = useState('')

  const { mode } = useColorScheme()

  const onMount = (editor) => {
    editorRef.current = editor
    editor.focus
  }

  const selectedLang = findSelectedLanguage(language)

  useEffect(() => {
    if (selectedLang) {
      setCodeValue(selectedLang.defaultCode)
    }
  }, [language])

  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Editor
        height="100%"
        theme={mode === 'dark' ? 'vs-dark' : 'light'}
        language={selectedLang?.id || 'javascript'}
        onMount={onMount}
        value={codeValue}
        onChange={(codeValue) => setCodeValue(codeValue)}
      />
    </Box>
  )
}

export default Code