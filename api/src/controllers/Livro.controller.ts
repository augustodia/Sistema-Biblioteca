import { Request, Response } from 'express'
import { Livro } from '../models/Livro'

//adicionando novo livro
export const adicionarLivro = async (req: Request, res: Response) => {
  console.log(req)
  // const novoLivro = await Livro.create(req.body)
  // res.status(201).json(novoLivro)
}

//listando todos os livros
export const listarLivros = async (req: Request, res: Response) => {
  let livros = await Livro.findAll()
  console.log(livros)
  res.json(livros)
}

//lista um livro específico
export const listarLivro = async (req: Request, res: Response) => {
  let livro = await Livro.findByPk(req.params.id)
  if(livro) {
    res.json({livro})
  } else {
    res.json({error: 'Livro não encontrado'})
  }
}

//editar um livro
export const editarLivro = async (req: Request, res: Response) => {
  let { id } = req.params
  let { nome, autor, ano, localizacao, quantidade } = req.body
  
  let livro = await Livro.findByPk(id)
  if(livro) {
    livro.nome = nome
    livro.autor = autor
    livro.ano = ano
    livro.localizacao = localizacao
    livro.quantidade = quantidade
    await livro.save()

    res.json({livro})
  } else {
    res.json({error: 'Livro não encontrado'})
  }
}

//excluir um livro (perdido ou estragado)
export const excluirLivro = async (req: Request, res: Response) => {
  let livro = await Livro.findByPk(req.params.id)
  livro ? livro.destroy() : ''
}