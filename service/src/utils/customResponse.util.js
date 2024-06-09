const CustomResponse = (res, isSuccessful, statusCode, message, data) => {
  let timeStamp = new Date().toISOString();
  return res
    .status(statusCode)
    .json({ isSuccessful, timeStamp, message, data });
};

module.exports = CustomResponse;
