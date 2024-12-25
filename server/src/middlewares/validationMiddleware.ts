import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsedResult = schema.safeParse(req.body);
    if (!parsedResult.success) {
      res.status(400).json({
        status: "Error",
        statusCode: 400,
        message: "Validation failed",
        errors: parsedResult.error.errors,
      });
      return;
    }
    req.body = parsedResult.data;
    next();
  };
