const {formPetisi, User, Petisi} = require('../models');

class formpetisiController{
    static async postFormPetisi (req, res) {
        try {
            const body = req.body;
            const { name, email, NomorHp, kota, PetisiId } = body;
            const UserId = req.body.UserId;
    
            const user = await User.findOne({ where: { id: UserId } });
            console.log(User);
    
            if (user) {
                const formpetisi = await formPetisi.create({
                    name,
                    email,
                    NomorHp,
                    kota,
                    PetisiId,
                    UserId
                });
                res.status(201).json(formpetisi);
            } else {
                res.status(404).json({ error: 'User Not Found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'internal Server Error' });
        }
    }

    static async getFormPetisi (req, res) {
        let respons;
    
        try {
            const formpetisi = await formPetisi.findAll({});
            respons = formpetisi;
            console.log(formpetisi);
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
            const formpetisi = await formPetisi.findOne({
                where: {
                    id: id
                }
            });
    
            if (respons = formpetisi) {
                res.status(200).json(respons);
            } else {
                res.status(404).json({ msg: `Formpetisi dengan id ${id} tidak ada!` });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Kesalahan Saat Mengakses Formpetisi!' });
        }
    }

    static async putFormPetisi (req, res) {
        try {
            const { name, email, NomorHp, kota, PetisiId, UserId } = req.body;
            const { id } = req.params;
    
            const formpetisi = await formPetisi.findByPk(id);
    
            if (formpetisi) {
                await formPetisi.update({ name, email, NomorHp, kota, PetisiId, UserId }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ msg: 'FormPetisi Berhasil Di Update!' });
            } else {
                res.status(404).json({ msg: `FormPetisi Dengan ID ${id} Tidak Di Temukan!` })
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengupdate FormPetisi!' });
        }
    }

    static async deleteFormPetisi(req, res){
        const id = req.params['id'];
        
            try {
                const formpetisi = await formPetisi.destroy({
                    where: {
                        id: id,
                    },
                });
        
                if (formpetisi > 0) {
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


module.exports = formpetisiController;