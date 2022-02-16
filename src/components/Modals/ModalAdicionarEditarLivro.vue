<template>
  <CModal size="lg" :visible="abrirModal" @close="() => { $emit('fecharModal', false)}">
    <CModalHeader>
      <CModalTitle>{{tituloModal}}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3 needs-validation">
        <CCol md="12">
          <CFormLabel required for="nome">Nome *</CFormLabel>
          <CFormInput type="text" id="nome" v-model="dados.nome" :invalid="!dados.nome" :valid="!!dados.nome" required/>
          <CFormFeedback invalid>Preencha o nome do livro</CFormFeedback>
        </CCol>
        <CCol md="10">
          <CFormLabel for="autor">Autor *</CFormLabel>
          <CFormInput type="text" id="autor" v-model="dados.autor" :invalid="!dados.autor" :valid="!!dados.autor" required/>
          <CFormFeedback invalid>Preencha o nome do autor</CFormFeedback>
        </CCol>
        <CCol xs="2">
          <CFormLabel for="anoEdicao">Ano da Edição *</CFormLabel>
          <CFormInput id="anoEdicao" placeholder="2020" v-model="dados.ano" :invalid="dados.ano.length < 4 || dados.ano.length > 4" :valid="dados.ano.length == 4" required/>
          <CFormFeedback invalid>Preencha um ano </CFormFeedback>
        </CCol>
        <CCol md="4">
          <CFormLabel for="localizacao">Localização *</CFormLabel>
          <CFormSelect id="localizacao" required v-model="dados.localizacao" :invalid="dados.localizacao == 0" :valid="dados.localizacao != 0">
            <option value="0" selected>Escolha...</option>
            <option value="1">Prateleira 1</option>
            <option value="2">Prateleira 2</option>
            <option value="3">Prateleira 3</option>
            <option value="4">Prateleira 4</option>
            <option value="5">Prateleira 5</option>
            <option value="6">Prateleira 6</option>
            <option value="7">Prateleira 7</option>
            <option value="8">Prateleira 8</option>
          </CFormSelect>
          <CFormFeedback invalid>Selecione uma localização</CFormFeedback>
        </CCol>
        <CCol xs="2">
          <CFormLabel for="quantidade">Quantidade *</CFormLabel>
          <CFormInput type="number" required id="quantidade" placeholder="" v-model="dados.quantidade" :invalid="(dados.quantidade <= 0)" :valid="!!dados.quantidade"/>
          <CFormFeedback invalid>Adicione pelo menos 1 item</CFormFeedback>
        </CCol>
      </CForm>
      </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => {$emit('fecharModal', false)}">
        Cancelar
      </CButton>
      <CButton color="primary" @click="salvar">Salvar</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
export default {
  emits: ["fecharModal", "salvar"],
  data() {
    return {
      dados: JSON.parse(JSON.stringify(this.dadosInputs))
    }
  },
  props: {
      abrirModal: {
        type: Boolean
      },
      dadosInputs: { 
        type: Object
      },
      tituloModal: {
        type: String
      },
  },
  methods: {
    salvar() {
      this.$emit('salvar', this.dados)
    }
  },
  watch: {
    dadosInputs() {
      this.dados = JSON.parse(JSON.stringify(this.dadosInputs))    }
  }
}
</script>

<style>

</style>