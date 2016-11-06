'use strict'

import 'colors'

export default function errorLog (msg) {
  const errMsg = msg || 'something went wrong ...'
  console.log(`Error: ${errMsg}`.bold.red)
}
