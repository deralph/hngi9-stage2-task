const performArithemetic = (req, res) => {
  console.log(req);
  console.log(req.body);
  const { operation_type, x, y } = req.body;
  console.log({ operation_type, x, y });
  if (!operation_type || !x || !y) {
    res.status(400).json({ msg: "all inputs are required" });
  }
  const lowerOperationType = operation_type.toLowerCase();
  console.log(lowerOperationType);
  const typeArray = ["addition", "substraction", "multiplication"];
  const check = typeArray.indexOf(lowerOperationType);
  console.log(check);
  if (check === -1) {
    res.status(400).json({ msg: "The operation type entered is void" });
  }

  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    res.status(400).json({ msg: "x or y must be an integer" });
  }
  let result = runFunction(lowerOperationType, x, y);
  console.log({
    slackUsername: "Ralph",
    result,
    operation_type,
  });
  res.status(200).json({
    slackUsername: "Ralph",
    result,
    operation_type: lowerOperationType,
  });
};

const runFunction = (params, x, y) => {
  if (params === "addition") {
    return x + y;
  }
  if (params === "substraction") {
    return x - y;
  }
  if (params === "multiplication") {
    return x * y;
  }
};

const errorPage = (req, res) => {
  res.send("wrong route");
};

module.exports = { performArithemetic, errorPage };
