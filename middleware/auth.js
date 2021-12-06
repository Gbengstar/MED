import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // check if token is valid
    const token = req.headers.authorization.split(" ")[1];

    if (token.length < 500 && token) {
      const decodedData = jwt.verify(
        token /* insert secret use  when creating token */
      );
      req.userId = decodedData?.id;
    } else {
      const decodedData = jwt.verify(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
