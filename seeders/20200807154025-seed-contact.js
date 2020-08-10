'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Contacts', [{
    firstName: 'Snoop',
    lastName: 'Dog',
    phoneNumber: '111-222-3333',
    email: 'snoopydog@dogpound.com',
    img: 'https://static.billboard.com/files/media/Snoop-Dogg-cr-Kenneth-Cappello-billboard-1548-1024x677.jpg?1',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    firstName: 'Scooby',
    lastName: 'Doo',
    phoneNumber: '444-555-6666',
    email: 'scooby.doo@misterymachine.com',
    img: 'https://secure.img1-fg.wfcdn.com/im/41259815/resize-h500-w500%5Ecompr-r85/4145/41457076/Scooby-Doo+Mystery+Incorporated+Standup.jpg',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    firstName: 'Herbie',
    lastName: 'Husker',
    phoneNumber: '402-437-0001',
    email: 'herbie.husker@unl.edu',
    img: 'https://i.pinimg.com/564x/41/29/b7/4129b79212013297f0dae3740db56f0a.jpg',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});
},
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Contacts', null, {});

  }
};
