const express = require('express');
const bodyParser = require('body-parser');
const { Comment, User, Forum } = require('./models');
const artikelController = require('./controllers/artikelController');
const infografisController = require('./controllers/infografisController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hellow ');
});

app.get('/artikel', artikelController.getArtikel);
app.get('/artikel/:id', artikelController.getByID);
app.post('/artikel', artikelController.postArtikel);
app.delete('/artikel/:id', artikelController.deleteArtikel);
app.put('/artikel/:id', artikelController.putArtikel);
// END Logic Artikel

app.post('/comment', async function (req, res) {
    try {
        const body = req.body;
        const { name, komentar, ArticleId } = body;
        console.log(body);
        const UserId = req.UserId;
        console.log(UserId);
        
        const user = await User.findOne({ where: { id: UserId } });
        console.log(user);

        if (user) {
            const comment = await Comment.create({
                name,
                komentar,
                ArticleId,
                UserId
            });
            res.status(201).json(comment);
        } else {
            res.status(404).json({ error: 'User Not Found' });
        }

    } catch (error) {
        res.status(500).json({ error: 'internal Server Error' });
    }
});

app.get('/comment', async function (req, res) {
    let respons;

    try {
        const artikel = await Comment.findAll({});
        respons = artikel;
        console.log(artikel);
    } catch (error) {
        respons = 'Error';
    }
    res.status(200).json(respons);
});

app.get('/comment/:id', async function (req, res) {
    const id = req.params.id;
    let respons;

    try {
        const comment = await Comment.findOne({
            where: {
                id: id
            }
        });

        if (comment) {
            res.status(200).json(respons);
        } else {
            res.status(404).json({ msg: `Komentar dengan id ${id} tidak ada!` });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Kesalahan Saat Mengakses Komentar!' });
    }
});

app.put('/comment/:id', async function (req, res) {
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
});

app.delete('/comment/:id', async function (req, res) {
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
});
// End Logic Komentar

app.get('/infografis', infografisController.getInfografis);
app.get('/infografis/:id', infografisController.getByID);
app.post('/infografis', infografisController.postInfografis);
app.put('/infografis/:id', infografisController.putInfografis);
app.delete('/infografis/:id', infografisController.deleteInfografis);
// End Infografis

app.get('/forum', async function (req, res) {
    let respons;

    try {
        const forum = await Forum.findAll({ include: User });
        console.log(forum);
        respons = forum;
    } catch (error) {
        respons = 'Error';
    }
    res.status(200).json({ msg: respons });
});

app.post('/forum', async function (req, res) {
    const body = req.body;
    const { topic, thread, post, user_id } = body;

    try {
        const forum = await Forum.create(
            {
                topic,
                thread,
                post,
                user_id
            });
        if (forum) {
            res.status(200).json(forum);
        } else {
            res.status(404).json({ msg: 'Gagal Saat Membuat Pesan Forum!' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Terjadi Kesalah Saat Membuat Pesan Forum!' });
    }
});

app.listen(4002, function () {
    console.log('Server run on port 4002');
});