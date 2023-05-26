const express = require('express')
const router = express.Router()

const { viewData, viewSingleData, viewSingleData2, addData } = require('../Controller/Control')

router.get('/view', viewData)
router.get('/view/one/:postId', viewSingleData)
router.post('/view/one', viewSingleData2)
router.post('/add', addData)

module.exports = router