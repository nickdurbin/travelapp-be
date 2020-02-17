const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

module.exports = server => {
  server.use(helmet())
  server.use(morgan())
  server.use(cors())
}