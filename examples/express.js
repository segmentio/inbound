// const express = require('express')
// const inbound = require('../index')

// const app = express()

// app.use(function (req, res, next) {
//   const referrer = req.header('referrer')
//   const href = req.url
//   const desc = inbound.referrer.parse(href, referrer)
//   req.referrer = desc
//   next(err)
// })

// app.use(app.router)

// app.get('/', function (req, res, next) {
//   return res.send(req.referrer)
// })

// const port = 8000
// app.listen(port)
// console.log(`Server listening on port : ${port}`)
