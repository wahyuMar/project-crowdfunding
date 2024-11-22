const asyncHandler = require("express-async-handler");


exports.default = asyncHandler(async (req, res) => {
    res.send("this is home page");
})