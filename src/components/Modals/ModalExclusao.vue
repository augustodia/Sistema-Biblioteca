<template>
  <CModal alignment="center" :visible="abrirModal" @close="() => { $emit('fecharModal', false) }">
    <CModalHeader>
      <CModalTitle>Excluir item</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <div class="d-flex flex-column align-items-center">
        <CIcon :icon="icon.cilWarning" size="3xl"/>
        <p class="mt-1">Você realmente deseja excluir este item?</p>
      </div>
      
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { $emit('fecharModal', false) }">
        Cancelar
      </CButton>
      <CButton color="primary" @click="excluirItem">Excluir</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
  import { CIcon } from '@coreui/icons-vue';
  import * as icon from '@coreui/icons';
  export default {
    components: {CIcon},
    emits: ["fecharModal"],
    data() {
      return { 
        icon,
        visibleVerticallyCenteredDemo: false,
      }
    },
    props: {
      abrirModal: {
        type: Boolean
      },
      idExclusao: {
        type: Number
      }
    },
    methods: {
      async excluirItem() {
        // console.log(this.idExclusao)
        await fetch(`http://localhost:4000/livro/${this.idExclusao}`, {method: 'DELETE'});
        this.$emit('fecharModal', true);
      }
    }
  }
</script>