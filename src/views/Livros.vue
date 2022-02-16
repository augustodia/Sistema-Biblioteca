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
                  <CButton component="a" color="danger" role="button" @click="() => { this.modalExcluir = true; idLivro = livro.id}">Excluir</CButton>
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
    <ModalAdicionarEditarLivro :tituloModal="'Editar Livro'" :dadosInputs="livro" :abrirModal="modalEditar" @fecharModal="fecharModalAdicionarEditar" @salvar="editarLivro"/>
    
    <ModalExclusao :tituloModal="'Editar Livro'" :idExclusao="idLivro" :abrirModal="modalExcluir" @fecharModal="fecharModalExcluir(event)"/>
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
      idLivro: null,
      livro: {
        nome: 'Aaaa',
        autor: 'aaaa',
        ano: 2222,
        localizacao: 1,
        quantidade: 1
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
      this.livro = {
        id: '',
        nome: '',
        autor: '',
        ano: '',
        localizacao: '',
        quantidade: 0
      }
    },
    async fecharModalExcluir(event) {
      // console.log('Entrou')
      await this.pegarLivros();
      this.modalExcluir = false;
    },
    async pegarLivros() {
      try {
        // let response = await fetch('http://localhost:4000/livros')
        await fetch('http://localhost:4000/livros')
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          this.livros = JSON.parse(JSON.stringify(data))
        });
        // console.log(this.livros);
      } catch (error) {
        console.log(error);
      }
    },
    abrirModalEditar(id) {  
      this.livro = this.livros.find(l => l.id == id);
      this.modalEditar = true;
    },
    abrirModalAdicionar() {  
      // this.livro = {
      //   nome: '',
      //   autor: '',
      //   ano: '',
      //   localizacao: '',
      //   quantidade: 0
      // }
      this.modalAdicionar = true;
    },
    async editarLivro(event) {
      event = JSON.parse(JSON.stringify(event))
      try {
        let response = await fetch(`http://localhost:4000/livro/${event.id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event)
        })
        // if(response.status != 201)
        //   throw new Error("Houve um erro na criação do Livro, contate o Administrador.")
        await this.pegarLivros();
        this.fecharModalAdicionarEditar();
      } catch (error) {
        console.log(error);
      }
    },
    async criarLivro(event) {
      event = JSON.parse(JSON.stringify(event))
      try {
        let response = await fetch('http://localhost:4000/adicionar-livro', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event)
        })
        if(response.status != 201)
          throw new Error("Houve um erro na criação do Livro, contate o Administrador.")
        await this.pegarLivros();
        this.fecharModalAdicionarEditar();
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

