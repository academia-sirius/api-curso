import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UserIdCheckMiddleware implements NestMiddleware{
    // no caso dos req, res usar o express e next -> NextFunction
    use(req: Request, res: Response, next: NextFunction) {
        console.log('middleware antes')
        if (isNaN(Number(req.params.id)) || Number(req.params.id)<=0) {
            // poderia fazer alguma accao aqui so ai passar para o proxima funcao ou @controller
            throw new Error(process.env.MSG_MIDDLEWARE);
        }
        console.log('middleware depois');
        next();
    }

}