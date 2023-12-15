const { Petisi, formPetisi, User } = require('../models')

class petisiController{
    static postPetisi (req, res) {
        const body = req.body;
        const { numberofSupport, target, image, url, title, hashtag, desc, desc1, desc2 } = body;
    
        Petisi.create({
            numberofSupport,
            target,
            image,
            url,
            title,
            hashtag,
            desc,
            desc1,
            desc2
        })
            .then((post) => {
                res.status(201).json(post);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    static async getPetisi (req, res) {
        let respons;
    
        try {
            const petisi = await Petisi.findAll({
                include: [
                    {
                        model: formPetisi,
                        include: [{ model: User}],
                    },
                ],
            });
            respons = petisi;
        } catch (error) {
            console.log(error);
            respons = "Error";
        }
        res.status(200).json(respons);
    }

    static async getById (req, res) {
        const id = req.params.id;
        let respons;
    
        try {
            const petisi = await Petisi.findOne({
                where: {
                    id: id,
                },
            });
    
            if ((respons = petisi)) {
                res.status(200).json(respons);
            } else {
                res.status(404).json({ msg: `Petisi dengan ID ${id} Tidak Ada!` });
            }
        } catch (error) {
            res.status(500).json({ msg: "Kesalahan Saat Mengakses Petisi!" });
        }
    }

    static async putPetisi (req, res) {
        try {
            const { id } = req.params;
            const { numberofSupport, target, image, url, title, hashtag, desc, desc1, desc2 } = req.body;
    
            const petisi = await Petisi.findByPk(id);
            if (petisi) {
                petisi.update({ numberofSupport, target, image, url, title, hashtag, desc, desc1, desc2 });
                res.status(200).json({ msg: `Data Petisi dengan id ${id} Berhasil di Update!` });
            } else {
                res.status(404).json({ msg: `Petisi Dengan ID ${id} Tersebut Tidak Di Temukan!` });
            }
        } catch (error) {
            res.status(500).json({ msg: "Terjadi Kesalahan Saat Mengupdate Data Petisi!" });
        }
    }

    static async deletedPetisi(req, res){
        const id = Number(req.params["id"]);
    
        try {
          const deletedPetisi = await Petisi.destroy({
            where: {
              id: id,
            },
          });
    
          if (deletedPetisi > 0) {
            res.status(200).json({ msg: `Data petisi dengan ID ${id} berhasil dihapus!` });
          } else {
            res.status(404).json({ msg: `Data petisi dengan ID ${id} tidak ditemukan!` });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({
            msg: `Terjadi kesalahan dalam menghapus data petisi dengan ID ${id}.`,
          });
        }
    }

}

module.exports = petisiController;