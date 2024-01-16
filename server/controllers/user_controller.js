const User = require("../models/user");

module.exports.createUser = async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      })
        .then(() => res.send(true))
        .catch((err) => console.log("error on creating user " + err));
    } else {
      res.send(false);
    }
  });
};
module.exports.createSession = (req, res) => {
  res.json({ message: "Login successful" });
};
module.exports.destroySession = (req, res) => {
  req.logout();
  res.json({ message: "Logout successful" });
};

module.exports.checkAuth = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
};
