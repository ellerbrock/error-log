'use strict'

import 'colors'

export default function errorLog (msg = 'something went wrong ...') {
  console.log(`Error: ${msg}`.bold.red)
}
