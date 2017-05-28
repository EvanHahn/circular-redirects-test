const express = require('express')

const app = express()

app.get('/a', (req, res) => { res.redirect('/b') })
app.get('/b', (req, res) => { res.redirect('/c') })
app.get('/c', (req, res) => { res.redirect('/a') })

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log('App started on port ' + port)
  })
}

module.exports = app
