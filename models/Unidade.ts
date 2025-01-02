import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../database/db'

class Unidade extends Model {};

Unidade.init(
    {     
        nome: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        grupo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'unidade'
    }
)



export default Unidade;
