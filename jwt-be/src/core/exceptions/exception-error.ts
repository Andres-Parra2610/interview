import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ErrorResponse } from "./interface";

@Catch(ErrorResponse)
export class ExceptionError implements ExceptionFilter {
  catch(exception: ErrorResponse, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    const { statusCode } = exception.error

    return response.status(statusCode).json(exception.error)
  }

}