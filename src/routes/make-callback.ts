import { Request, Response } from 'express';
import { InternalServerError, isHttpError } from 'http-errors';

export default (controller: any) => (req: Request, res: Response) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    // user: req.user,
    // id: req.id,
    // log: req.log,
    // fileContent: req.file,
    source: {
      ip: req.ip,
      browser: req.get('User-Agent'),
    },
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
      'Access-Control-Allow-Origin': 'mind-dev.cloudclickup.com',
      'Access-Control-Allow-Credential': true,
    },
  };

  controller(httpRequest)
    .then((controllerResponse: any) => {
      const allowedOrigins = ['http://localhost:3601'];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin || '')) {
        res.setHeader('Access-Control-Allow-Origin', origin || "");
      }
      res.header('Access-Control-Allow-Credential', 'true');
      res.header('Access-Control-Allow-Headers', '*');
      res.status(200).json({
        success: true,
        code: 200,
        data: controllerResponse,
      });
    })
    .catch((error: any) => {
      if (isHttpError(error)) {
        const { statusCode } = error;
        return res.status(statusCode).json({
          success: false,
          code: statusCode,
          data: error,
        });
      } else {
        const httpError = new InternalServerError(error.message);
        return res.status(httpError.statusCode).json({
          success: false,
          code: httpError.statusCode,
          data: httpError,
        });
      }
    });
};