const {Donasi, User} = require('../models')

class donasiController{
    static async postDonasi (req, res) {
        try {
            const body = req.body;
            console.log(body);
            const { nama, email, nomorHp, nomorRekening, formatedValue, nominalValue } = body;
            const UserId = req.body.UserId;
    
            const user = await User.findOne({ where: { id: UserId } });
    
            if (user) {
                const donasi = await Donasi.create({
                    nama,
                    email,
                    nomorHp,
                    nomorRekening,
                    formatedValue,
                    nominalValue,
                    UserId
                });
                res.status(201).json(donasi);
            } else {
                res.status(404).json({ msg: 'User Not Found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'internal Server Error' });
        }
    }

    static async getDonasi (req, res) {
        let respons;
        try {
            const donasi = await Donasi.findAll({ include: User });
            console.log(donasi);
            respons = donasi;
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json({ msg: respons });
    }
    static async getById (req, res) {
        const id = req.params.id;
        let respons;
    
        try {
            const donasi = await Donasi.findOne({ where: { id: id } });
    
            if(respons = donasi){
                res.status(200).json(respons);
            }else{
                res.status(404).json({msg: `Data Donasi dengan ${id} Tidak Ada!`});
            }
        } catch (error) {
            res.status(500).json({msg: `Kesalahan saat mengakses ${id} Donasi!`});
        }
    }

    static async deleteDonasi(req, res){
        const id = req.params['id'];
        
        try {
            const donasi = await Donasi.destroy({
                where: {
                    id: id,
                },
            });
    
            if (donasi > 0) {
                res.status(200).json({ msg: `Donasi dengan ID ${id} berhasil dihapus!` });
            } else {
                res.status(404).json({ msg: `Donasi dengan ID ${id} tidak ditemukan!` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Terjadi kesalahan dalam menghapus Donasi dengan ID ${id}.` });
        }
    }

    static async putDonasi(req, res){
        try {
            const { nama, email, nomorHp, nomorRekening, formatedValue, nominalValue, UserId } = req.body;
            const { id } = req.params;
    
            const donasi = await Donasi.findByPk(id);
    
            if (donasi) {
                await Donasi.update({ nama, email, nomorHp, nomorRekening, formatedValue, nominalValue, UserId }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ msg: 'Donasi Berhasil Di Update!' });
            } else {
                res.status(404).json({ msg: `Donasi Dengan ID ${id} Tidak Di Temukan!` })
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengupdate Donasi!' });
        }
    
    }

}

module.exports = donasiController;