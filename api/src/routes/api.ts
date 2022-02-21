import { Router } from "express";
import * as LivroController from '../controllers/Livro.controller'
import * as UsuarioController from '../controllers/Usuario.controller'
import * as EmprestimoController from '../controllers/Emprestimo.controller'

const router = Router()

/*--------------------------- Livros -----------------------------*/
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

/*--------------------------- Usuários -----------------------------*/

//novo usuario
router.post('/adicionar-usuario', UsuarioController.adicionarUsuario)

//listar usuarios
router.get('/usuarios', UsuarioController.listarUsuarios)

//pegar usuarios especifico
router.get('/usuario/:id', UsuarioController.listarUsuario)

//editar um usuarios
router.put('/usuario/:id', UsuarioController.editarUsuario)

//editar um usuarios
router.delete('/usuario/:id', UsuarioController.excluirUsuario)

/*--------------------------- Empréstimos -----------------------------*/

//novo usuario
router.post('/adicionar-emprestimo', EmprestimoController.adicionarEmprestimo)

//listar emprestimos
router.get('/emprestimos', EmprestimoController.listarEmprestimos)

//pegar emprestimos especifico
router.get('/emprestimo/:id', EmprestimoController.listarEmprestimo)

//editar um emprestimos
router.put('/emprestimo/:id', EmprestimoController.editarEmprestimo)

//editar um emprestimos
router.delete('/emprestimo/:id', EmprestimoController.excluirEmprestimo)


export default router