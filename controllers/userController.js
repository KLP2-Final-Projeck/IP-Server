const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasia';

class userController {
  static async putUser(req, res) {
    try {
      const { id } = req.params;
      const { username, password, email, telepon, isAdmin } = req.body;

      const user = await User.findByPk(id);
      if (user) {
        user.update({ username, password, email, telepon, isAdmin });
        res
          .status(200)
          .json({ msg: `Data User dengan id ${id} Berhasil di Update!` });
      } else {
        res
          .status(404)
          .json({ msg: `User Dengan ID ${id} Tersebut Tidak Di Temukan!` });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Terjadi Kesalahan Saat Mengupdate Data User!" });
    }
  }
  static async getByID(req, res) {
    const id = req.params.id;
    let respons;

    try {
      const user = await User.findOne({
        where: {
          id: id,
        },
      });

      if ((respons = user)) {
        res.status(200).json(respons);
      } else {
        res.status(404).json({ msg: `Artikel dengan ID ${id} Tidak Ada!` });
      }
    } catch (error) {
      res.status(500).json({ msg: "Kesalahan Saat Mengakses Artikel!" });
    }
  }

  static async deleteUser(req, res) {
    const id = Number(req.params["id"]);

    try {
      const deletedUser = await User.destroy({
        where: {
          id: id,
        },
      });

      if (deletedUser > 0) {
        res.status(200).json({ msg: `Data dengan ID ${id} berhasil dihapus!` });
      } else {
        res.status(404).json({ msg: `Data dengan ID ${id} tidak ditemukan!` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: `Terjadi kesalahan dalam menghapus data dengan ID ${id}.`,
      });
    }
  }

  static async getUser(req, res) {
    let respons;

    try {
      const user = await User.findAll({});
      respons = user;
    } catch (error) {
      console.log(error);
      respons = "Error";
    }
    res.status(200).json(respons);
  }

  static async userRegister(req, res) {
    const { username, password, email, telepon, isAdmin } = req.body;

    User.create({ username, password, email, telepon, isAdmin })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(404).json(error)
      });
  }

  static async userLogin(req, res, next) {
    const { username, password } = req.body;

    let user = await User.findOne({ where: { username } });

    if (user) {
      const hash = user.password;
      const isValid = bcrypt.compareSync(password, hash);

      if (isValid) {
        const token = jwt.sign({ id: user.id, username: user.username, isAdmin: user.isAdmin }, secret);
        res.status(200).json({ data: { token } });
      } else {
        next(new Error({ msg: 'EMAIL/PASSWORD ANDA SALAH!' }));
      }
    } else {
      next(new Error({ msg: 'EMAIL/PASSWORD ANDA SALAH!' }));
    }
  }

}

module.exports = userController;