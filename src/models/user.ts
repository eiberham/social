import { Model, DataTypes } from "sequelize";
import { db } from "../db";

class User extends Model {
    public id!          : number;
    public name!        : string;
    public email!       : string;
    public country!     : string;
    public username!    : string;
    public password!    : string;

}

User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    country: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    tableName: 'users',
    sequelize: db,
  });

  function encryptPasswordIfChanged(user, options) {
    if (user.changed('password')) {
      encryptPassword(user.get('password'));
    }
  }
  
  User.beforeCreate(encryptPasswordIfChanged);
  User.beforeUpdate(encryptPasswordIfChanged);

export default User;