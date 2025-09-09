export default function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500
  
  res.status(statusCode).json({
    error: err.message || 'Server Error',
  })
}