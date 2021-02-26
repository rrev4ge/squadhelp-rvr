module.exports.queryParser = (req, res, next) => {
  for (const key in req.query) {
    if (req.query[key] === 'undefined') {
      req.query[key] = undefined;
    }
    if (req.query[key] === 'false') {
      req.query[key] = false;
    }
    if (req.query[key] === 'true') {
      req.query[key] = true;
    }
  }
  next();
};
