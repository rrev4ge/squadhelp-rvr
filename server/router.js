const { Router } = require('express');
const basicMiddlewares = require('./middlewares/basicMiddlewares');
const hashPass = require('./middlewares/hashPassMiddle');
const userController = require('./controllers/userController');
const contestController = require('./controllers/contestController');
const checkToken = require('./middlewares/checkToken');
const validators = require('./middlewares/validators');
const chatController = require('./controllers/chatController');
const upload = require('./utils/fileUpload');
const router = Router();
const contestRouter = require('./routers/contestRouter');

// authRouter

router.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration,
);

router.post(
  '/login',
  validators.validateLogin,
  userController.login,
);

router.post(
  '/getUser',
  checkToken.checkAuth,
);

// contestRouter
// /api/contests
router.use('/contests', contestRouter);

router.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);

// paymentRouter

router.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment,
);

router.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);


// customerRouter

router.post(
  '/getCustomersContests',
  checkToken.checkToken,
  contestController.getCustomersContests,
);

// userRouter

router.post(
  '/updateUser',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);


router.get(
  '/downloadFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);


router.post(
  '/setNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

router.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

router.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

// chatRouter

router.post(
  '/newMessage',
  checkToken.checkToken,
  chatController.addMessage,
);

router.post(
  '/getChat',
  checkToken.checkToken,
  chatController.getChat,
);

router.post(
  '/getPreview',
  checkToken.checkToken,
  chatController.getPreview,
);

router.post(
  '/blackList',
  checkToken.checkToken,
  chatController.blackList,
);

router.post(
  '/favorite',
  checkToken.checkToken,
  chatController.favoriteChat,
);

router.post(
  '/createCatalog',
  checkToken.checkToken,
  chatController.createCatalog,
);

router.post(
  '/updateNameCatalog',
  checkToken.checkToken,
  chatController.updateNameCatalog,
);

router.post(
  '/addNewChatToCatalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog,
);

router.post(
  '/removeChatFromCatalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog,
);

router.post(
  '/deleteCatalog',
  checkToken.checkToken,
  chatController.deleteCatalog,
);

router.post(
  '/getCatalogs',
  checkToken.checkToken,
  chatController.getCatalogs,
);

module.exports = router;
