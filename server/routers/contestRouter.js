const { Router } = require('express');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const contestController = require('./../controllers/contestController');
const checkToken = require('./../middlewares/checkToken');
const upload = require('./../utils/fileUpload');

const contestRouter = Router();

// router.post(
//   '/getAllContests',
contestRouter.get(
  '/',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests);

// check update mw, controller
// router.get(
//   '/getContestById',
contestRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);


// update mw, controller
// router.post(
//   '/updateContest',
contestRouter.put(
  '/:contestId',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

module.exports = contestRouter;
