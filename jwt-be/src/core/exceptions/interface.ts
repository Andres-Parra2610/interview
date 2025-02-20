export interface IError {
  message: string;
  statusCode: number;
}

export class ErrorResponse {
  constructor(public error: IError) { }
}