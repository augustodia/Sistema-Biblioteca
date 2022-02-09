<template>
  <CModal size="lg" :visible="abrirModal" @close="() => { $emit('fecharModal', false)}">
    <CModalHeader>
      <CModalTitle>Novo Livro</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3 needs-validation">
        <CCol md="12">
          <CFormLabel required for="nome">Nome *</CFormLabel>
          <CFormInput type="text" id="nome" v-model="dadosInputs.nome" :invalid="!dadosInputs.nome" :valid="!!dadosInputs.nome" required/>
          <CFormFeedback invalid>Preencha o nome do livro</CFormFeedback>
        </CCol>
        <CCol md="10">
          <CFormLabel for="autor">Autor *</CFormLabel>
          <CFormInput type="text" id="autor" v-model="dadosInputs.autor" :invalid="!dadosInputs.autor" :valid="!!dadosInputs.autor" required/>
          <CFormFeedback invalid>Preencha o nome do autor</CFormFeedback>
        </CCol>
        <CCol xs="2">
          <CFormLabel for="anoEdicao">Ano da Edição *</CFormLabel>
          <CFormInput id="anoEdicao" placeholder="2020" v-model="dadosInputs.ano" :invalid="dadosInputs.ano.length < 4 || dadosInputs.ano.length > 4" :valid="dadosInputs.ano.length == 4" required/>
          <CFormFeedback invalid>Preencha um ano </CFormFeedback>
        </CCol>
        <CCol md="4">
          <CFormLabel for="localizacao">Localização *</CFormLabel>
          <CFormSelect id="localizacao" required v-model="dadosInputs.localizacao" :invalid="dadosInputs.localizacao == 0" :valid="dadosInputs.localizacao != 0">
            <option value="0" selected>Escolha...</option>
            <option>Prateleira 1</option>
            <option>Prateleira 2</option>
            <option>Prateleira 3</option>
            <option>Prateleira 4</option>
            <option>Prateleira 5</option>
            <option>Prateleira 6</option>
            <option>Prateleira 7</option>
            <option>Prateleira 8</option>
          </CFormSelect>
          <CFormFeedback invalid>Selecione uma localização</CFormFeedback>
        </CCol>
        <CCol xs="2">
          <CFormLabel for="quantidade">Quantidade *</CFormLabel>
          <CFormInput type="number" required id="quantidade" placeholder="" v-model="dadosInputs.quantidade" :invalid="(dadosInputs.quantidade <= 0)" :valid="!!dadosInputs.quantidade"/>
          <CFormFeedback invalid>Adicione pelo menos 1 item</CFormFeedback>
        </CCol>
      </CForm>
      </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => {$emit('fecharModal', false)}">
        Cancelar
      </CButton>
      <CButton color="primary">Salvar</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
export default {
  emits: ["fecharModal"],
  props: {
      abrirModal: {
        type: Boolean
      },
      dadosInputs: { 
        type: Object
      }
    }
}
</script>

<style>

</style>