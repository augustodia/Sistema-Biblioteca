import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/pg'

export interface LivroInstance extends Model {
  id: number,
  nome: string,
  autor: string,
  ano: number,
  localizacao: number,
  quantidade: number
}

export const Livro = sequelize.define<LivroInstance>('livros', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  autor: {
    type: DataTypes.STRING
  },
  ano: {
    type: DataTypes.INTEGER
  },
  localizacao: {
    type: DataTypes.INTEGER
  },
  quantidade: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'livros',
  timestamps: false
})