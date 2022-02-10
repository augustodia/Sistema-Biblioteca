<template>
  <CRow>
    <CCol :md="12">
      <CButton component="a" color="primary" role="button" @click="() => { modalAdicionar = true }">Adicionar Novo</CButton>
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
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Comentário Bíblico Adventista Genesis a Deutoronômio Vol. 1</CTableDataCell>
                <CTableDataCell>CPB</CTableDataCell>
                <CTableDataCell>2016</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" role="button" class="m-1" @click="() => { modalEditar = true }">Editar</CButton>
                  <CButton component="a" color="danger" role="button" @click="() => { modalExcluir = true }">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Comentário Bíblico Adventista Genesis a Deutoronômio Vol. 2</CTableDataCell>
                <CTableDataCell>CPB</CTableDataCell>
                <CTableDataCell>2016</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" role="button" class="m-1" @click="() => { modalEditar = true }">Editar</CButton>
                  <CButton component="a" color="danger" role="button" @click="() => { modalExcluir = true }">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Comentário Bíblico Adventista Genesis a Deutoronômio Vol. 3</CTableDataCell>
                <CTableDataCell>CPB</CTableDataCell>
                <CTableDataCell>2016</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" role="button" class="m-1" @click="() => { modalEditar = true }">Editar</CButton>
                  <CButton component="a" color="danger" role="button" @click="() => { modalExcluir = true }">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>

    <ModalAdicionarEditarLivro :tituloModal="'Adicionar Livro'" :dadosInputs="livro" :abrirModal="modalAdicionar" @fecharModal="fecharModalAdicionarEditar" @salvar="criarLivro"/>
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
      }
    }
  },
  methods: {
    fecharModalAdicionarEditar(event) {
      this.modalAdicionar = event;
      this.modalEditar = event;
      this.modalExcluir = event;
    },
    async criarLivro(event) {
      try {
        // let response = await fetch('http://localhost:3000/adicionar-livro', {
        //   method: 'POST',
        //   body: JSON.stringify(event)
        // })
        let response = await fetch('http://localhost:3000/livros');
        console.log(response.body);
      } catch (error) {
        console.log(error);
      }
    }
  }
  }
</script>

