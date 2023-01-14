const express = require('express')
const router = require('express').Router
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080


app.use(express.static('dist'))
app.use(router)
app.get('/health', (req, res) => {
  res.send('ok')
})
app.use()

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on ${PORT}`)
})


