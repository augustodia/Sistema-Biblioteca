import { Router } from "express";
import * as LivroController from '../controllers/Livro.controller'

const router = Router()

//novo livro
router.post('/adicionar-livro', LivroController.adicionarLivro)

//listar livros
router.get('/livros', LivroController.listarLivros)

//pegar livro especifico
router.get('/livro/:id', LivroController.listarLivro)

//editar um livro
router.put('/livro/:id', LivroController.editarLivro)

//editar um livro
router.delete('/livro/:id', LivroController.excluirLivro)


export default router