<template>
  <CRow>
    <CCol :md="12">
      <CButton component="a" color="primary" role="button" @click="abrirModalAdicionar">Adicionar Novo</CButton>
      <CCard class="mb-4 mt-2">
        <CCardBody>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nome do Livro</CTableHeaderCell>
                <CTableHeaderCell scope="col">Autor(a)</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ano</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(livro) in livros" :key="livro.id">
                <CTableHeaderCell scope="row">{{livro.id}}</CTableHeaderCell>
                <CTableDataCell>{{livro.nome}}</CTableDataCell>
                <CTableDataCell>{{livro.autor}}</CTableDataCell>
                <CTableDataCell>{{livro.ano}}</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" role="button" class="m-1" @click="abrirModalEditar(livro.id)">Editar</CButton>
                  <CButton component="a" color="danger" role="button" @click="() => { modalExcluir = true }">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
    <!-- MODAL ADICIONAR -->
    <ModalAdicionarEditarLivro :tituloModal="'Adicionar Livro'" :dadosInputs="livro" :abrirModal="modalAdicionar" @fecharModal="fecharModalAdicionarEditar" @salvar="criarLivro"/>
    <!-- MODAL EDITAR -->
    <ModalAdicionarEditarLivro :tituloModal="'Editar Livro'" :dadosInputs="livro" :abrirModal="modalEditar" @fecharModal="fecharModalAdicionarEditar"/>
    <ModalExclusao :tituloModal="'Editar Livro'" :abrirModal="modalExcluir" @fecharModal="fecharModalAdicionarEditar"/>
  </CRow>
</template>

<script>
import ModalAdicionarEditarLivro from '@/components/Modals/ModalAdicionarEditarLivro.vue';
import ModalExclusao from '@/components/Modals/ModalExclusao.vue';

export default {
  components: {ModalAdicionarEditarLivro, ModalExclusao},
  data() {
    return { 
      modalAdicionar: false,
      modalEditar: false,
      modalExcluir: false,
      livro: {
        nome: '',
        autor: '',
        ano: '',
        localizacao: '',
        quantidade: 0
      },
      livros: [
        // ano: undefined,
        // autor: '',
        // id: undefined,
        // localizacao: undefined,
        // nome: '',
        // quantidade: undefined
      ]
    }
  },
  methods: {
    fecharModalAdicionarEditar(event) {
      this.modalAdicionar = event;
      this.modalEditar = event;
      this.modalExcluir = event;
    },
    async pegarLivros() {
      try {
        // let response = await fetch('http://localhost:4000/livros')
        await fetch('http://localhost:3000/livros')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.livros = data
        });
        console.log(this.livros);
      } catch (error) {
        console.log(error);
      }
    },
    abrirModalEditar(id) {  
      this.livro = this.livros.find(l => l.id == id);
      this.modalEditar = true;
    },
    abrirModalAdicionar() {  
      this.livro = {
        nome: '',
        autor: '',
        ano: '',
        localizacao: '',
        quantidade: 0
      }
      this.modalAdicionar = true;
    },
    async criarLivro(event) {
      try {
        let response = await fetch('http://localhost:3000/adicionar-livro', {
          method: 'POST',
          body: JSON.stringify(event)
        })
        if(response.status != 200)
          throw new Error("Houve um erro na criação do Livro, contate o Administrador.")
        await this.pegarLivros();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.pegarLivros();
  }
  }
</script>

