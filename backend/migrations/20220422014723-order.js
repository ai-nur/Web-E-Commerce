"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order", {
      orderID: {
        type: Sequelize.INTEGER(12),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      orderUserID: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
      },
      orderAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderShipName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderShipAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderCity: {
        type: Sequelize.STRING,
      },
      orderProvince: {
        type: Sequelize.STRING,
      },
      orderCountry: {
        type: Sequelize.STRING,
      },
      orderZip: {
        type: Sequelize.STRING,
      },
      orderPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderShipping: {
        type: Sequelize.STRING,
      },
      orderTax: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      orderShipped: {
        type: Sequelize.BOOLEAN,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("order");
  },
};
