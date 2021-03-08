
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Transaction extends Model {

    static associate(models) {
      Transaction.belongsTo(models.Users, { foreignKey: 'userId', targetKey: 'id' });
    }
  }

  Transaction.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sum: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'Transactions',
  });

  return Transaction;
};
