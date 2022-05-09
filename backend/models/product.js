module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productID: {
            type: DataTypes.INTEGER(12),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          productName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          productCartDesc: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          productShortDesc: {
            type: DataTypes.STRING(1234),
          },
          productLongDesc: {
            type: DataTypes.TEXT,
          },
          productImage: {
            type: DataTypes.STRING,
          },
          productCategoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          productStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
          }
    }, {
        tableName: "products"
    });
    return Product
}