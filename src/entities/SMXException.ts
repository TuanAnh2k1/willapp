class SMXException {
  public Type?: ExceptionType;
  public Message?: string;
}

enum ExceptionType {
  PostFailed = 1,
  GetFailed = 2,
  BadRequest = 3,
  Unauthorized = 4,
  NotAcceptable = 5,
  NotConnection = 6,
}

const ClientMessage = (mess: string) => {
  let ex = new SMXException();
  ex.Type = ExceptionType.BadRequest;
  ex.Message = mess;
  return ex;
};

export { SMXException, ExceptionType, ClientMessage };