const { Router } = require('express');
const chatRouter = require('./routers/chatRouter');
const contestRouter = require('./routers/contestRouter');
const userRouter = require('./routers/userRouter');

const router = Router();

router.use('/contests', contestRouter);
router.use('/users', userRouter);
router.use('/chat', chatRouter);

module.exports = router;
