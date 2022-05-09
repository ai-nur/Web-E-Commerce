"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      userID: {
        type: Sequelize.INTEGER(12),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userPassword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userRole: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userFirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userLastName: {
        type: Sequelize.STRING,
      },
      userCity: {
        type: Sequelize.STRING,
      },
      userProvince: {
        type: Sequelize.STRING,
      },
      userCountry: {
        type: Sequelize.STRING,
      },
      userZip: {
        type: Sequelize.STRING,
      },
      userPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userAddress: {
        type: Sequelize.STRING,
      },
      userAddress2: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
