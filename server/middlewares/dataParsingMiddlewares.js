module.exports.queryParser = (req, res, next) => {
  for (const key in req.query) {
    if (req.query[key] === 'undefined') {
      console.log(req.query[key]);
      req.query[key] = undefined;
      console.log(req.query[key]);
    }
    if (req.query[key] === 'false') {
      console.log(req.query[key]);
      req.query[key] = false;
      console.log(req.query[key]);
    }
    if (req.query[key] === 'true') {
      console.log(req.query[key]);
      req.query[key] = true;
      console.log(req.query[key]);
    }
  }
  next();
};
