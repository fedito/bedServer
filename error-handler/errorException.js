const ErrorCode = require("./errorCode");



class ErrorException extends Error {
  status = null;
  metaData = null;
  constructor(code, metaData) {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = code;
    this.status = 500;
    this.metaData = metaData;
    switch (code) {
      case ErrorCode.Unauthenticated:
        this.status = 401;
        break;
      case ErrorCode.UserAlreadyExists:
        this.status = 400;
        break;
      case ErrorCode.WrongPassword:
        this.status = 400;
        break;
      case ErrorCode.AsyncError:
        this.status = 400;
        break;
      case ErrorCode.NotFound:
        this.status = 404;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}

module.exports = ErrorException;
