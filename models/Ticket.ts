import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../database/db'

class Ticket extends Model {};

Ticket.init(
    {     
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
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
