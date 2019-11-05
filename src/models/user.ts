import { Model, DataTypes } from "sequelize";

class User extends Model {
    public id!          : number;
    public name!        : string;
    public email!       : string;
    public country!     : string | null;
    public username!    : string;
    public password!    : string;

}

/* User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    tableName: 'users',
    sequelize: sequelize,
  }); */

export default User;