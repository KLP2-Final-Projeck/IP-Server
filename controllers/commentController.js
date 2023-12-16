const {Comment, User} = require('../models');

class commentController{
    static async postComment (req, res) {
        try {
            const body = req.body;
            const { name, komentar, ArtikelId } = body;
            const UserId = req.body.UserId;
            
            const user = await User.findOne({ where: { id: UserId } });
            console.log(User);
    
            if (user) {
                const comment = await Comment.create({
                    name,
                    komentar,
                    ArtikelId,
                    UserId
                });
                res.status(201).json(comment);
            } else {
                res.status(404).json({ error: 'User Not Found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'internal Server Error' });
        }
    }

    static async getComment (req, res) {
        let respons;
    
        try {
            const artikel = await Comment.findAll({});
            respons = artikel;
            console.log(artikel);
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json(respons);
    }

    static async getById (req, res) {
        const id = req.params.id;
        console.log(id);
        let respons;
    
        try {
            const comment = await Comment.findOne({
                where: {
                    id: id
                }
            });
    
            if (respons = comment) {
                res.status(200).json(respons);
            } else {
                res.status(404).json({ msg: `Komentar dengan id ${id} tidak ada!` });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Kesalahan Saat Mengakses Komentar!' });
        }
    }

    static async putComment (req, res) {
        try {
            const { name, komentar } = req.body;
            const { id } = req.params;
    
            const komentars = await Comment.findByPk(id);
    
            if (komentars) {
                await Comment.update({ name, komentar }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ msg: 'Komentar Berhasil Di Update!' });
            } else {
                res.status(404).json({ msg: `Komentar Dengan ID ${id} Tidak Di Temukan!` })
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengupdate Komentar!' });
        }
    }

    static async deleteComment (req, res) {
        const id = req.params['id'];
    
        try {
            const comment = await Comment.destroy({
                where: {
                    id: id,
                },
            });
    
            if (comment > 0) {
                res.status(200).json({ msg: `Data dengan ID ${id} berhasil dihapus!` });
            } else {
                res.status(404).json({ msg: `Data dengan ID ${id} tidak ditemukan!` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Terjadi kesalahan dalam menghapus data dengan ID ${id}.` });
        }
    }


}

module.exports = commentController;