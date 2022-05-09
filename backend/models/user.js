module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userID: {
            type: DataTypes.INTEGER(12),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          userRole: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
          userFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          userLastName: {
            type: DataTypes.STRING,
          },
          userCity: {
            type: DataTypes.STRING,
          },
          userProvince: {
            type: DataTypes.STRING,
          },
          userCountry: {
            type: DataTypes.STRING,
          },
          userZip: {
            type: DataTypes.STRING,
          },
          userPhone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          userAddress: {
            type: DataTypes.STRING,
          },
          userAddress2: {
            type: DataTypes.STRING,
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
        tableName: "users"
    });
    return User
}