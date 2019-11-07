import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'fetch-mock'
import { useQuote } from '.'

describe('useQuote', () => {
  it('is truthy', () => {
    expect(useQuote).toBeTruthy()
  })
  
  it('should return a quote object with text and author when making a request to the real web API', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useQuote())

    expect(result.current.isLoading).toBeTruthy()
    expect(result.current.isError).toBeFalsy()
    expect(result.current.quote.text).toEqual('')
    expect(result.current.quote.author).toEqual('')

    await waitForNextUpdate()

    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.isError).toBeFalsy()
    expect(result.current.quote.text).not.toBe('')
    expect(typeof result.current.quote.text).toBe('string')
    expect(result.current.quote.author).not.toBe('')
    expect(typeof result.current.quote.author).toBe('string')
  })

  describe('with MOCK web API', () => {
    beforeAll(() => {
      global.fetch = global.fetch;
    })
  
    afterAll(() => {
      fetchMock.restore();
    })
  
    it('should first return "loading" then a quote object with text and author', async () => {
      fetchMock.mock('*', {
        quoteText: 'This is a test quote',
        quoteAuthor: 'Author test name'
      });
  
      const { result, waitForNextUpdate } = renderHook(() => useQuote())
      
      expect(result.current.isLoading).toBeTruthy()
      expect(result.current.isError).toBeFalsy()
      expect(result.current.quote.text).toEqual('')
      expect(result.current.quote.author).toEqual('')
      
      await waitForNextUpdate()
  
      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.isError).toBeFalsy()
      expect(result.current.quote.text).toEqual('This is a test quote')
      expect(result.current.quote.author).toEqual('Author test name')
    }) 
  
    it('should return error as true when API error occurred', async () => {
      fetchMock.mock('*', 500, { overwriteRoutes: true });
  
      const { result, waitForNextUpdate } = renderHook(() => useQuote())
  
      expect(result.current.isLoading).toBeTruthy()
      expect(result.current.isError).toBeFalsy()
      expect(result.current.quote.text).toEqual('')
      expect(result.current.quote.author).toEqual('')
      
      await waitForNextUpdate()
  
      expect(result.current.isLoading).toBeFalsy()
      expect(result.current.isError).toBeTruthy()
      expect(result.current.quote.text).toEqual('')
      expect(result.current.quote.author).toEqual('')
    })
  })
})
