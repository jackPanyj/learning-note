const config = require('./webpack.config')
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

app.listen(3000, err => {
  if (err) console.log(err)
  else console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 3000, 3000)
})
