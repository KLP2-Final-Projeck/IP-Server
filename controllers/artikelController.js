const { Artikel, Comment, User } = require("../models");
class artikelController {
  static async getArtikel(req, res) {
    let respons;

    try {
      const artikel = await Artikel.findAll({
        include: [
          {
            model: Comment,
            // include: [{ model: User}],
          },
        ],
      });
      respons = artikel;
    } catch (error) {
      console.log(error);
      respons = "Error";
    }
    res.status(200).json(respons);
  }

  static async getByID(req, res) {
    const id = req.params.id;
    let respons;

    try {
      const artikel = await Artikel.findOne({
        where: {
          id: id,
        },
      });

      if ((respons = artikel)) {
        res.status(200).json(respons);
      } else {
        res.status(404).json({ msg: `Artikel dengan ID ${id} Tidak Ada!` });
      }
    } catch (error) {
      res.status(500).json({ msg: "Kesalahan Saat Mengakses Artikel!" });
    }
  }

  static postArtikel(req, res) {
    const body = req.body;
    const { titleArtikel, descArtikel, author, date, category, image } = body;

    Artikel.create({
      titleArtikel,
      descArtikel,
      author,
      date,
      category,
      image,
    })
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  }

  static async deleteArtikel(req, res) {
    const id = Number(req.params["id"]);

    try {
      const deletedArtikel = await Artikel.destroy({
        where: {
          id: id,
        },
      });

      if (deletedArtikel > 0) {
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

  static async putArtikel(req, res) {
    try {
      const { id } = req.params;
      const { titleArtikel, descArtikel, author, date, category, image } = req.body;

      const artikel = await Artikel.findByPk(id);
      if (artikel) {
        artikel.update({ titleArtikel, descArtikel, author, date, category, image });
        res
          .status(200)
          .json({ msg: `Data Artikel dengan id ${id} Berhasil di Update!` });
      } else {
        res
          .status(404)
          .json({ msg: `Artikel Dengan ID ${id} Tersebut Tidak Di Temukan!` });
      }
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Terjadi Kesalahan Saat Mengupdate Data Artikel!" });
    }
  }
}

module.exports = artikelController;
