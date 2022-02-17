import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/pg'

export interface UsuarioInstance extends Model {
  id: number,
  nome: string,
  cpf: string,
  rua: string,
  numero: number,
  cidade: string,
  uf: string,
  cep: string,
  telefone: string
}

export const Usuario = sequelize.define<UsuarioInstance>('usuarios', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  cpf: {
    type: DataTypes.STRING
  },
  rua: {
    type: DataTypes.STRING
  },
  numero: {
    type: DataTypes.INTEGER
  },
  cidade: {
    type: DataTypes.STRING
  },
  uf: {
    type: DataTypes.STRING
  },
  cep: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  },
}, {
  tableName: 'usuarios',
  timestamps: false
})