import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db'

class Ticket extends Model {};

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        ticketTitle: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ticketDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Ticket'
    }
)

export default Ticket;
