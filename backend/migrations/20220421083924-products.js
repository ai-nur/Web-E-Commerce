"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      productID: {
        type: Sequelize.INTEGER(12),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productCartDesc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productShortDesc: {
        type: Sequelize.STRING(1234),
      },
      productLongDesc: {
        type: Sequelize.TEXT,
      },
      productImage: {
        type: Sequelize.STRING,
      },
      productCategoryID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("products");
  },
};
