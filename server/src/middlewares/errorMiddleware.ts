import { Request, Response, NextFunction } from "express";

interface ErrorWithStatus extends Error {
  status?: number;
}
export const erroHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";

  console.error(`[Error] ${statusCode} = ${message}`);
  res.status(statusCode).json({
    status: "Error",
    statusCode,
    message,
  });
};
