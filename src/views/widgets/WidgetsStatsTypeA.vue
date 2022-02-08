<template>
  <CRow>
    <!-- LIVROS -->
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="primary">
        <template #value
          >34
          <span class="fs-6 fw-normal">
            <!-- (-12.4% <CIcon icon="cil-arrow-bottom" />) -->
          </span>
        </template>
        <template #title>Livros</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#321fdb',
                  data: [1, 5, 8, 17, 24, 32, 34],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: -10,
                  max: 50,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>

    <!-- NOVOS LIVROS -->
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="info">
        <template #value
          >3
          <span class="fs-6 fw-normal">
            <!-- (40.9% <CIcon icon="cil-arrow-top" />) -->
          </span>
        </template>
        <template #title>Novos livros</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#39f',
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: -9,
                  max: 39,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>

    <!-- LIVROS EMPRESTADOS -->
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="warning">
        <template #value
          >2.49%
          <span class="fs-6 fw-normal">
            (84.7% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Livros já emprestados</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              elements: {
                line: {
                  borderWidth: 2,
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>

    <!-- LIVROS SEM DEVOLVER -->
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="danger">
        <template #value
          >3
          <span class="fs-6 fw-normal">
            <!-- (-23.6% <CIcon icon="cil-arrow-bottom" />) -->
          </span>
        </template>
        <template #title>Livros sem devolver</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="bar"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
                'January',
                'February',
                'March',
                'April',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [
                    78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                    82,
                  ],
                  barPercentage: 0.6,
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawBorder: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
}
</script>
