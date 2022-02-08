<template>
  <CRow>
    <CCol :md="12">
      <CButton component="a" color="primary" href="#" role="button">adicionar Novo</CButton>
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
                  <CButton component="a" color="secondary" href="#" role="button" class="m-1">Editar</CButton>
                  <CButton component="a" color="danger" href="#" role="button">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Comentário Bíblico Adventista Genesis a Deutoronômio Vol. 2</CTableDataCell>
                <CTableDataCell>CPB</CTableDataCell>
                <CTableDataCell>2016</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" href="#" role="button" class="m-1">Editar</CButton>
                  <CButton component="a" color="danger" href="#" role="button">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell>Comentário Bíblico Adventista Genesis a Deutoronômio Vol. 3</CTableDataCell>
                <CTableDataCell>CPB</CTableDataCell>
                <CTableDataCell>2016</CTableDataCell>
                <CTableDataCell>
                  <CButton component="a" color="secondary" href="#" role="button" class="m-1">Editar</CButton>
                  <CButton component="a" color="danger" href="#" role="button">Excluir</CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
    <!-- VER SE FUNCIONA O MODAL -->
    <CModal>

    </CModal>
  </CRow>
</template>
