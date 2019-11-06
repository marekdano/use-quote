import React from 'react'
import { useMyHook } from '@marekdano/use-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App