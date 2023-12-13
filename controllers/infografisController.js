const { Infografis } = require('../models');

class infografisController{
    static postInfografis(req, res) {
        const body = req.body;
        const { judul, gambar, url } = body;
    
        Infografis.create(
            {
                judul,
                gambar,
                url
            }
        )
            .then((post) => {
                res.status(201).json(post);
            })
            .catch((error) => {
                res.status(500).json(error)
            });
    }

    static async getInfografis(req, res){
            let respons;
        
            try {
                const infografis = await Infografis.findAll();
                respons = infografis;
            } catch (error) {
                respons = 'Error';
            }
            res.status(200).json(respons);
    }

    static async getByID (req, res) {
        const id = req.params['id'];
        let respons;
    
        try {
            const infografis = await Infografis.findOne({ where: { id: id } });
    
            if (infografis) {
                respons = infografis;
                res.status(200).json(respons);
            } else {
                res.status(404).json({ msg: `Infografis dengan id ${id} tidak ada!` });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Kesalah Saat Akses data infografis!' });
        }
    }


    static async putInfografis (req, res) {
        try {
            const { judul, gambar, url } = req.body;
            const { id } = req.params;
    
            const infografis = await Infografis.findByPk(id);
    
            if (infografis) {
                await infografis.update({ judul, gambar, url }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ msg: 'Infografis Berhasil Di Update!' });
            } else {
                res.status(404).json({ msg: `Infografis Dengan ID ${id} Tidak Di Temukan!` })
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengupdate Infografis!' });
        }
    }

    static async deleteInfografis (req, res) {
        const id = req.params['id'];
    
        try {
            const infografis = await Infografis.destroy({
                where: {
                    id: id,
                },
            });
    
            if (infografis > 0) {
                res.status(200).json({ msg: `Infografis dengan ID ${id} berhasil dihapus!` });
            } else {
                res.status(404).json({ msg: `Infografis dengan ID ${id} tidak ditemukan!` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Terjadi kesalahan dalam menghapus Infografis dengan ID ${id}.` });
        }
    }

}

module.exports = infografisController;