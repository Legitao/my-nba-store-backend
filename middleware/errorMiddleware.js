// catch-all error handler
const errorHandler = (err, req, res, next) => {
  console.log('catch-all handler called');
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

exports.errorHandler = errorHandler;
