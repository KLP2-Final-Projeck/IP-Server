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
    return queryInterface.bulkInsert('Petisis', [{
      numberofSupport: 1,
      target: 'Komunitas Tanaman',
      image: 'fylayer-festival.jpg',
      url: 'https://festivaltanaman.com',
      title: 'Festival Tanaman Hias',
      hashtag:'#Hijau #Maju',
      desc:'Acara Untuk Menghijaukan dan Melestarikan Tanaman dan memperkenalkannya ke Dunia',
      desc1:'Membuat Akrab Semua Warga',
      desc2:'Membuat Wadah Untuk Pecinta Tanaman',
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
    return queryInterface.bulkDelete('Petisis', null, {});
  }
};
