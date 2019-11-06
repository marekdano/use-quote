# @marekdano/use-quote

> a custom React hook that provides a random quote from QuoteGarden

[![NPM](https://img.shields.io/npm/v/@marekdano/use-quote.svg)](https://www.npmjs.com/package/@marekdano/use-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @marekdano/use-quote
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@marekdano/use-quote'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [marekdano](https://github.com/marekdano)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
