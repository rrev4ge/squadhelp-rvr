const { Router } = require('express');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const contestController = require('./../controllers/contestController');
const checkToken = require('./../middlewares/checkToken');
const dataParsing = require('./../middlewares/dataParsingMiddlewares');
const upload = require('./../utils/fileUpload');

const contestRouter = Router();


contestRouter.get(
  '/active',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  dataParsing.queryParser,
  contestController.getActiveContests
);

contestRouter.get(
  '/customer',
  checkToken.checkToken,
  dataParsing.queryParser,
  contestController.getCustomersContests,
);

contestRouter.get(
  '/id/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);


contestRouter.put(
  '/id/:contestId',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

contestRouter.post(
  '/data',
  checkToken.checkToken,
  contestController.dataForContest,
);

contestRouter.get(
  '/getFile/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

contestRouter.post(
  '/createNewOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

contestRouter.post(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

module.exports = contestRouter;
