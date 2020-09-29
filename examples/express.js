var inbound = require('../index'),
  express = require('express')

var app = express()

app.use(function (req, res, next) {
  var referrer = req.header('referrer')
  var href = req.url
  const desc = inbound.referrer.parse(href, referrer)
  req.referrer = desc
  next(err)
})

app.use(app.router)

app.get('/', function (req, res, next) {
  return res.send(req.referrer)
})

var port = 8000
app.listen(port)
console.log('Server listening on port : ' + port)
