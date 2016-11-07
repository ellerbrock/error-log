'use strict'

import 'colors'

export default errorLog

function errorLog (msg) {
  msg = msg || 'something went wrong ...'
  console.log(`❌  Error: ${msg}`.bold.red)
}
