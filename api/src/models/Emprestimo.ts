import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/pg'


export interface EmprestimoInstance extends Model {
  id: number,
  idUsuario: number,
  idLivro: number,
  createdAt: Date,
  updatedAt: Date
}

export const Emprestimo = sequelize.define<EmprestimoInstance>('usuarios', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  idUsuario: {
    type: DataTypes.INTEGER
  },
  idLivro: {
    type: DataTypes.INTEGER
  },
  //talvez precise usar createdAt e updateAt
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'emprestimo',
  timestamps: true
})