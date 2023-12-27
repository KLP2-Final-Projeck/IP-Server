const { User } = require("../models");

async function isAdmin(req, res, next) {
  try {
    const userId = req.body.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID tidak valid" });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User tidak ditemukan" });
    }

    if (user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ error: "ANDA BUKAN ADMIN" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isAdmin;
