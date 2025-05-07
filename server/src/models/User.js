import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  steamId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  realName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    validate: { isUrl: true }
  },
  lastLogin: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  timestamps: true,
  paranoid: true
});
