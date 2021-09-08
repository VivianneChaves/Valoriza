import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Receber o tokem
    const authToken = request.headers.authorization;

    //Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");


    try {
        //Validar se token é válido
        const { sub } = verify(token, "023a6c89d73b1489cddebed0221f3aa3") as IPayload;

        //Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch {
        return response.status(401).end();
    }




}