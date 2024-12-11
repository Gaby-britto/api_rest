const { Router } = require('express');

const adminRouter = require('./adminRouter')
const clientRouter = require('./clientRouter')
const accountRouter = require('./accountRouter')
const notificationsRouter = require('./notificationsRouter')
const transactionsRouter= require('./transactionsRouter')

const router = Router();

router.use('/admin', adminRouter);
router.use('/cliente', clientRouter);
router.use('/account', accountRouter);
router.use('/notificacao', notificationsRouter)
router.use('/transacao', transactionsRouter)

module.exports = router;