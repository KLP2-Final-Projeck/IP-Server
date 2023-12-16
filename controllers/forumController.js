const {Forum, User} = require('../models');

class forumController{
    static async getForum (req, res) {
        let respons;
        try {
            const forum = await Forum.findAll({ include: User });
            console.log(forum);
            respons = forum;
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json({ msg: respons });
    }

    static  async getById (req, res) {
        const id = req.params.id;
        let respons;
    
        try {
            const forum = await Forum.findOne({ where: { id: id } });
    
            if (respons = forum) {
                res.status(200).json(respons)
            } else {
                res.status(404).json({ msg: `User Forum Chat Dengan dengan ${id} Tidak Ada!` });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengakses User Forum' })
        }
    }

    static async postForum (req, res) {
        try {
            const body = req.body;
            const { topic, thread, post, } = body;
            const UserId = req.body.UserId;
            console.log(UserId);
    
            const user = await User.findOne({ where: { id: UserId } });
            console.log(User);
    
            if (user) {
                const forum = await Forum.create({
                    topic,
                    thread,
                    post,
                    UserId
                });
                res.status(201).json(forum);
            } else {
                res.status(404).json({ error: 'User Not Found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'internal Server Error' });
        }
    }

    static async deleteForum (req, res) {
        const id = req.params['id'];
    
        try {
            const forum = await Forum.destroy({
                where: {
                    id: id,
                },
            });
    
            if (forum > 0) {
                res.status(200).json({ msg: `User Forum dengan ID ${id} berhasil dihapus!` });
            } else {
                res.status(404).json({ msg: `User Forum dengan ID ${id} tidak ditemukan!` });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Terjadi kesalahan dalam menghapus User Forum dengan ID ${id}.` });
        }
    }

    static async putForum (req, res) {
        try {
            const { topic, thread, post } = req.body;
            const { id } = req.params;
    
            const forum = await Forum.findByPk(id);
    
            if (forum) {
                await Forum.update({ topic, thread, post }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ msg: 'User Forum Berhasil Di Update!' });
            } else {
                res.status(404).json({ msg: `User Forum Dengan ID ${id} Tidak Di Temukan!` })
            }
        } catch (error) {
            res.status(500).json({ msg: 'Terjadi Kesalahan Saat Mengupdate User Forum!' });
        }
    }

}

module.exports = forumController;