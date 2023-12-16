'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Artikels', [{
      titleArtikel: 'Cara Membasmi Hama',
      descArtikel: 'Artikel ini memberikan panduan komprehensif tentang strategi dan metode terbaik untuk membasmi hama pada tanaman secara efektif. Kehadiran hama pada tanaman dapat menyebabkan kerugian yang signifikan bagi petani dan penghobi taman. Oleh karena itu, pemahaman tentang cara mengatasi dan mencegah hama perlu ditingkatkan.',
      date: '10-12-2023',
      category: 'Tanaman',
      image: 'gambar-example.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Artikels', null, {});
  }
};
