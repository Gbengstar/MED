const logger = (req, res, next) => {
  const time = new Date();
  console.log(time);
  next();
};
export default logger