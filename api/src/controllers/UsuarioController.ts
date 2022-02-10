import { Request, Response } from 'express'
import { Livro } from '../models/Livro'

//adicionando novo livro
export const adicionarLivro = async (req: Request, res: Response) => {
  
  const novoLivro = await Livro.create(req.body)
  console.log(novoLivro);
  
  res.json(novoLivro)
}

export const listarLivros = (req: Request, res: Response) => {
  let livros = Livro.findAll()
  res.json(livros)
}