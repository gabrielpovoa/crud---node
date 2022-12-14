import { Model,DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstance extends Model{
    id: number;
    name: string;
    email: string
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: "users",
    timestamps: false,
    updatedAt: false
})