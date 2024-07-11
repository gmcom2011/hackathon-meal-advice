import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import https from 'https';
import listEndpoints from 'express-list-endpoints';
import createError, { NotFound } from 'http-errors';
import cors from 'cors';
import routes from './routes';
// import './utility/cron';

class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

// Error handling Middleware function reads the error message
// and sends back a response in JSON format
const errorResponder = (
  error: AppError,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;
  const httpError = createError(statusCode, error);

  return response.status(httpError.statusCode).json({
    success: false,
    code: httpError.statusCode,
    data: httpError,
  });
};

// Fallback Middleware function for returning
// 404 error for undefined paths
const invalidPathHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const httpError = new NotFound('Invalid path');

  // request.log.error('Invalid path');

  return response.status(httpError.statusCode).json({
    success: false,
    code: httpError.statusCode,
    data: httpError,
  });
};

const app = express();
app.use(cors());

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(authorizer);

app.use('/api', routes);

console.log(listEndpoints(app));
// console.log(process.env)

// Attach the second Error handling Middleware
// function defined above (which sends back the response)
app.use(errorResponder);

// Attach the fallback Middleware
// function which sends back the response for invalid paths)
app.use(invalidPathHandler);

const port = process.env.BACKEND_PORT || 3001;

var httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
