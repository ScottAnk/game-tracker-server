const requestLogger = (req, res, next) => {
  console.log('\n==========new request==========\n')
  console.log(`${req.method}   ${req.url}`)
  console.log(req.body)
  console.log('===============================')
  next()
}

module.exports = requestLogger
