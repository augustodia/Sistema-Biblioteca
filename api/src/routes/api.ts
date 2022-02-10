import { Router } from "express";
import * as UsuarioController from '../controllers/UsuarioController'

const router = Router()

//listar livros
router.get('/livros', UsuarioController.listarLivros)

//novo livro
router.post('/adicionar-livro', UsuarioController.adicionarLivro)

export default router