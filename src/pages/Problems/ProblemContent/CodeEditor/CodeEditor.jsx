import Split from 'react-split'
import '~/assets/styles/split.css'
import Code from './Code/Code'
import Terminal from './Terminal/Terminal'

function CodeEditor({ language }) {
  return (

    <Split
      className="split-vertical"
      direction="vertical"
      sizes={[70, 30]}
      minSize={100}
      gutterSize={8}

    >
      <Code language={language} />
      <Terminal />
    </Split>

  )
}

export default CodeEditor