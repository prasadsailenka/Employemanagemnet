const { validationResult } = require("express-validator");
exports.validateBody = (req, res, next) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
  const errArray = [];
  errors.array().map((el) => {
   errArray.push(el.msg);
  });
  console.log("Validation errors", errArray.join(","));
  return res.status(400).json({
   statusCode: -1,
   statusDescription: errArray.join(","),
  });
 } else {
  next();
 }
};