module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        orderID: {
            type: DataTypes.INTEGER(12),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          orderUserID: {
            type: DataTypes.INTEGER(12),
            allowNull: false,
          },
          orderAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          orderShipName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          orderShipAddress: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          orderCity: {
            type: DataTypes.STRING,
          },
          orderProvince: {
            type: DataTypes.STRING,
          },
          orderCountry: {
            type: DataTypes.STRING,
          },
          orderZip: {
            type: DataTypes.STRING,
          },
          orderPhone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          orderEmail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          orderShipping: {
            type: DataTypes.STRING,
          },
          orderTax: {
            type: DataTypes.STRING,
          },
          orderShipped: {
            type: DataTypes.BOOLEAN,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
    }, {
        tableName: "order"
    });
    return Orders
}