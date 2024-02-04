import { ChartOptions } from 'nuxt-highcharts/lib/types';
<template>
  <div class="flex justify-between px-8 py-4"></div>
  <div class="grid gap-4 px-8 mb-8">
    <div class="shadow-md p-4 rounded-md bg-blue-200">
      <highchart
        :options="chartOptions"
        :modules="['exporting']"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          height: '1000px',
        },
        title: {
          text: 'Jumlah Penduduk Provinsi di Indonesia 2023',
        },
        xAxis: {
          categories: [],
          title: {
            text: 'Provinsi',
          },
        },
        yAxis: {
          title: {
            text: 'Jumlah Penduduk',
          },
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
            },
          },
        },
        tooltip: {
          shared: true,
          formatter: function () {
            console.log(this.points);
            return [`<b> ${this.x}</b> <br/>`].concat(
              this.points
                ? this.points.map(point => {
                    return `${point.series.name}: ${point.y} <br/>`;
                  })
                : []
            );
          },
        },
        series: [
          {
            name: 'Jumlah Penduduk',
            data: [],
          },
          {
            name: 'Jumlah Penduduk/km2',
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    convertToNameFormat(str) {
      if (str && typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      } else {
        return '';
      }
    },

    async fetchData() {
      const resp = await fetch(
        'https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2023'
      );
      const body = await resp.json();
      this.items = body.data;

      this.chartOptions.xAxis.categories = this.items.map(entry =>
        this.convertToNameFormat(entry.prov)
      );

      this.chartOptions.series[0].data = this.items.map(entry =>
        parseInt(entry.jumlah_penduduk)
      );
      this.chartOptions.series[1].data = this.items.map(entry =>
        parseInt(entry.jumlah_penduduk_km2)
      );
    },
  },
};
</script>
