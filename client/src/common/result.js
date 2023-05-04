export class Result {
  constructor(isSuccess = false, data = null) {
    this.isSuccess = isSuccess;
    this.data = data;
  }
}

// Fail result
export const failResult = (msg) => {
  return new Result(false, {
    data: {
      message: msg
    }
  });
}

// Success result
export const successResult = (msg) => {
  return new Result(true, {
    data: {
      message: msg
    }
  });
}
