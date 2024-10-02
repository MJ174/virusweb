const router = require('express').Router()
const path = require('path')

router.get('/', function (req, res) {
  // const indexPath = path.join(__dirname, '../index.html')
  res.render('home.ejs')
})

module.exports = router