# @marekdano/use-quote

> A custom React hook that provides a random quote from QuoteGarden

[![NPM](https://img.shields.io/npm/v/@marekdano/use-quote.svg)](https://www.npmjs.com/package/@marekdano/use-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @marekdano/use-quote
```
OR

```bash
yarn add @marekdano/use-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useQuote } from '@marekdano/use-quote'

const Example = () => {
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
```

## License

MIT © [marekdano](https://github.com/marekdano)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
