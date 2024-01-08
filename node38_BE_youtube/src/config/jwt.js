import jwt from "jsonwebtoken";

const createToken = (data) => {
  return jwt.sign({ data }, "NODE38", { expiresIn: "1y" });
};

const checkToken = (token) => {
  return jwt.verify(token, "NODE38", (err, decodded) => {
    if (err) {
      // nếu giải mã thất bại -> sẽ có error message
      return {
        statusCode: 401, //401 - undefined
        message: "Invalid token",
      };
    }
    // giải mã thành công
    return {
      statusCode: 200,
      data: decodded,
    };
  });
};
const khoaApi = (req, res, next) => {
  // nếu thỏa yêu cầu của middleware thì bypass
  let { token } = req.headers;
  // kiểm trả có token trên header
  if (token) {
    let verifyToken = checkToken(token);
    if (verifyToken.statusCode == 401) {
      res.status(401).send("Invalid token");
      return;
    }
    // nếu muốn check role
    // handle logic ở đây
    next(); // bypass
  } else {
    res.status(401).send("Unauthorized");
    return;
  }
};
export { createToken, checkToken, khoaApi };
