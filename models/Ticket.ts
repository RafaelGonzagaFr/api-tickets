import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../database/db'
import User from './User';
import Unidade from './Unidade';
import Equipe from './Equipe';

class Ticket extends Model {};

Ticket.init(
    {     
        titulo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        crticidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'ticket'
    }
)


export default Ticket;
