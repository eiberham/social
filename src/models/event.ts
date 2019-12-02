import { Model, DataTypes } from "sequelize";
import { db } from "../db";

class Event extends Model {
    public id!          : number;
    public name!        : string;
    public description! : string;
    public date!        : Date;
    public opening!     : Date;
    public ending!      : Date;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    organizer: {
        type: new DataTypes.STRING(128),
        allowNull: true
    },
    date: {
      type: new DataTypes.DATEONLY(),
      allowNull: false
    },
    opening: {
      type: new DataTypes.DATE(),
      allowNull: false
    },
    ending: {
      type: new DataTypes.DATE()
    }
  },
  {
    tableName: 'events',
    sequelize: db,
  }
);

export default Event;