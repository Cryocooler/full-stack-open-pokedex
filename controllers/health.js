const router = require('express').Router()

router.get('/health', (req, res) => {
  res.send('ok')
})

export default router