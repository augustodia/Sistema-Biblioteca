import { Request, Response } from 'express'
import { Usuario } from '../models/Usuario'

//adicionando novo usuario
export const adicionarUsuario = async (req: Request, res: Response) => {
  const novoUsuario = await Usuario.create(req.body)
  res.status(201).json(novoUsuario)
}

//listando todos os usuarios
export const listarUsuarios = async (req: Request, res: Response) => {
  let usuarios = await Usuario.findAll()
  // console.log(usuarios)
  res.status(200).json(usuarios)
}

//lista um usuario específico
export const listarUsuario = async (req: Request, res: Response) => {
  let usuario = await Usuario.findByPk(req.params.id)
  if(usuario) {
    res.status(200).json({usuario})
  } else {
    res.status(404).json({error: 'Usuario não encontrado'})
  }
}

//editar um usuario
export const editarUsuario = async (req: Request, res: Response) => {
  let { id } = req.params
  let { nome, cpf, rua, numero, cidade, uf, cep, telefone } = req.body
  
  let usuario = await Usuario.findByPk(id)
  if(usuario) {
    usuario.nome = nome
    usuario.cpf = cpf
    usuario.rua = rua
    usuario.numero = numero
    usuario.cidade = cidade
    usuario.uf = uf
    usuario.cep = cep
    usuario.telefone = telefone
    await usuario.save()

    res.status(201).json(usuario)
  } else {
    res.status(404).json({error: 'Usuario não encontrado'})
  }
}

//excluir um usuario
export const excluirUsuario = async (req: Request, res: Response) => {
  let response = await Usuario.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).json(response)
}