import React from 'react'
import { useQuote } from '@marekdano/use-quote'

const App = () => {
  const { quote, isLoading, isError } = useQuote()
  
  if (isLoading) return <p>Loading...</p>

  if (quote) {
    return (
      <>
        <p>{quote.text}</p>
        <p><i>{quote.author}</i></p>
      </>
    )
  }

  if (isError) return <p>Difficulty displaying a quote at the moment.</p>

  return null
}
export default App