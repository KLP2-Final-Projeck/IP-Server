const { Infografis, Artikel, Petisi, Donasi} = require('../models');

class totalController{
    static async getTotalData (req, res) {
        try {
          const totalAksi = await Infografis.findAll({ /* tambahkan filter jika diperlukan */ });
          const totalArticle = await Artikel.findAll({ /* tambahkan filter jika diperlukan */ });
          const totalInfografis = await Petisi.findAll({ /* tambahkan filter jika diperlukan */ });
          const totalDonasi = await Donasi.findAll({ /* tambahkan filter jika diperlukan */ });
      
          res.json({
            totalAksi,
            totalArticle,
            totalInfografis,
            totalDonasi,
          });
        } catch (error) {
          console.error('Error fetching total data:', error);
          res.status(500).json({ msg: 'Internal Server Error' });
        }
      };

}

module.exports = totalController;