const { Router } = require('express');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const contestController = require('./../controllers/contestController');
const checkToken = require('./../middlewares/checkToken');
const dataParsing = require('./../middlewares/dataParsingMiddlewares');
const upload = require('./../utils/fileUpload');

const contestRouter = Router();

// router.post(
//   '/getAllContests',
contestRouter.get(
  '/active',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  dataParsing.queryParser,
  contestController.getActiveContests);

// check update mw, controller
// router.get(
//   '/getContestById',
contestRouter.get(
  '/id/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);


// update mw, controller
// router.post(
//   '/updateContest',
contestRouter.put(
  '/id/:contestId',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);


// router.post(
//   '/getCustomersContests',
contestRouter.get(
  '/customer',
  checkToken.checkToken,
  dataParsing.queryParser,
  contestController.getCustomersContests,
);

module.exports = contestRouter;
