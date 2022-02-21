import { Request, Response } from 'express'
import { Emprestimo } from '../models/Emprestimo'

//adicionando novo emprestimo
export const adicionarEmprestimo = async (req: Request, res: Response) => {
  const novoEmprestimo = await Emprestimo.create(req.body)
  res.status(201).json(novoEmprestimo)
}

//listando todos os emprestimos
export const listarEmprestimos = async (req: Request, res: Response) => {
  let emprestimos = await Emprestimo.findAll()
  // console.log(emprestimos)
  res.status(200).json(emprestimos)
}

//lista um emprestimo específico
export const listarEmprestimo = async (req: Request, res: Response) => {
  let emprestimo = await Emprestimo.findByPk(req.params.id)
  if (emprestimo) {
    res.status(200).json({ emprestimo })
  } else {
    res.status(404).json({ error: 'Emprestimo não encontrado' })
  }
}

//editar um emprestimo
export const editarEmprestimo = async (req: Request, res: Response) => {
  let { id } = req.params
  let { idUsuario, idLivro, dataInicio, dataFim } = req.body

  let emprestimo = await Emprestimo.findByPk(id)
  if (emprestimo) {
    emprestimo.idUsuario = idUsuario
    emprestimo.idLivro = idLivro
    emprestimo.createdAt = dataInicio
    emprestimo.updatedAt = dataFim
    await emprestimo.save()

    res.status(201).json(emprestimo)
  } else {
    res.status(404).json({ error: 'Emprestimo não encontrado' })
  }
}

//excluir um emprestimo
export const excluirEmprestimo = async (req: Request, res: Response) => {
  let response = await Emprestimo.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).json(response)
}