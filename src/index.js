import { useState, useEffect } from 'react'

export const useQuote = () => {
  const url = `https://quote-garden.herokuapp.com/quotes/random`

  const [quote, setQuote] = useState({text: '', author: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let mounted = true;
    async function getQuote() {
      setIsError(false)
      setIsLoading(true)

      try {
        // JSON object from web API has structure of { "_id": string, "quoteText": string, "quoteAuthor": string }
        const response = await fetch(url)
        const { quoteText: text, quoteAuthor } = await response.json()
        const author = quoteAuthor || 'Anonymous'

        if (mounted) setQuote({text, author})
      } catch (error) {
        if (mounted) setIsError(true)
      }

      if (mounted) setIsLoading(false)
    };

    getQuote();

    return () => {
      mounted = false
    }
  }, [])

  return { quote, isLoading, isError }
}
