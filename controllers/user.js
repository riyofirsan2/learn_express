const User = require("../models/user");

// Create User
exports.Create = async (req, res, next) => {
  try {
    const data = await User.create(req.body);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// Get Users
exports.GetAll = async (req, res, next) => {
  try {
    const data = await User.find();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// View User by Id
exports.View = async (req, res, next) => {
  try {
    const data = await User.findById(req.params.userId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

// View User by others
exports.ViewOne = async (req, res, next) => {
  try {
    const data = await User.findOne({ userName: req.body.userName }); // by username

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};
