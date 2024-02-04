import { ChartOptions } from 'nuxt-highcharts/lib/types';
<template>
  <div class="flex justify-between px-8 py-4">
    <div class="text-xxl font-semibold">Charts</div>
  </div>
  <div class="grid grid-cols-2 gap-4 px-8 mb-8">
    <div class="shadow-md p-4 rounded-md bg-blue-200">
      <highchart
        :options="chartPieOptions"
        :modules="['exporting', 'export-data']"
      />
    </div>
    <div class="shadow-md p-4 rounded-md bg-pink-200">
      <highchart
        :options="chartOptions"
        :modules="['exporting']"
      />
    </div>
    <div class="shadow-md p-4 rounded-md bg-purple-300">
      <highchart :options="chartColumnStackOptions" />
    </div>
    <div class="shadow-md p-4 rounded-md bg-yellow-200">
      <highchart :options="chartColumnOptions" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartPieOptions: {
        chart: {
          type: 'pie',
          //   height: '400px',
          //   width: '500',
          // backgroundColor: 'transparent',
        },
        title: {
          text: 'Perbandingan Pria & Wanita',
          style: {
            color: 'Purple',
          },
        },
        subtitle: {
          text: 'Jumlah Penduduk Lombok 2023',
        },
        plotOptions: {
          pie: {
            innerSize: '40%', //donuts
            allowPointSelect: true,
            dataLabels: {
              enabled: true,
              distance: -50,
              format: '{point.name}<br/>{point.y}',
            },
          },
        },
        series: [
          {
            name: 'Perbandingan Penduduk',
            data: [
              {
                name: 'Pria',
                y: 8124,
              },
              {
                name: 'Wanita',
                y: 12725,
              },
            ],
          },
        ],
      },
      chartOptions: {
        chart: {
          type: 'areaspline',
          //   height: '400px',
          //   width: '500',
          backgroundColor: 'transparent',
        },
        title: {
          text: 'Statistik Penduduk Lombok',
        },
        subtitle: {
          text: 'Data Penduduk Lombok 2018-2023',
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        tooltip: {
          //   enabled: true,
          // format
          //   format:
          //     ' Tahun {x} <br/> Jumlah Penduduk {series.name} <b>{point.y}</b>',

          // formatter
          //   formatter: function () {
          //     return `<b>Tahun ${this.x}</b> Jumlah Penduduk ${this.series.name}:  ${this.point.y}`;
          //   },
          //   formatter share tooltip
          shared: true,
          //   split: true,
          formatter: function () {
            console.log(this.points);
            return [`<b>Tahun ${this.x}</b> <br/>`].concat(
              this.points
                ? this.points.map(point => {
                    return `Jumlah ${point.series.name}: ${point.y} <br/>`;
                  })
                : []
            );
          },
        },
        legend: {
          align: 'center',
          verticalAlign: 'top',
          layout: 'horizontal',
        },
        xAxis: {
          title: {
            text: 'Tahun',
          },
          categories: ['2018', '2019', '2020', '2021'],
        },
        yAxis: {
          title: {
            text: 'Jumlah Penduduk',
          },
        },
        series: [
          {
            name: 'Pria',
            data: [20124, 21312, 52331, 12346],
          },
          {
            name: 'Wanita',
            data: [50124, 51312, 32331, 22346],
          },
        ],
      },
      chartColumnStackOptions: {
        chart: {
          type: 'column',
          //   height: '400px',
          //   width: '500',
          backgroundColor: 'transparent',
        },
        credits: {
          enabled: true,
        },
        title: {
          text: 'Statistik Penduduk Lombok',
        },
        subtitle: {
          text: 'Data Penduduk Lombok 2018-2023',
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
          //   enabled: true,
          // format
          //   format:
          //     ' Tahun {x} <br/> Jumlah Penduduk {series.name} <b>{point.y}</b>',

          // formatter
          //   formatter: function () {
          //     return `<b>Tahun ${this.x}</b> Jumlah Penduduk ${this.series.name}:  ${this.point.y}`;
          //   },
          //   formatter share tooltip
          //   shared: true,
          split: true,
          formatter: function () {
            console.log(this.points);
            return [`<b>Tahun ${this.x}</b> <br/>`].concat(
              this.points
                ? this.points.map(point => {
                    return `Jumlah ${point.series.name}: ${point.y} <br/>`;
                  })
                : []
            );
          },
        },
        legend: {
          align: 'center',
          verticalAlign: 'top',
          layout: 'horizontal',
        },
        xAxis: {
          title: {
            text: 'Tahun',
          },
          categories: ['2018', '2019', '2020', '2021'],
        },
        yAxis: {
          title: {
            text: 'Jumlah Penduduk',
          },
        },
        series: [
          {
            name: 'Pria',
            data: [20124, 21312, 52331, 12346],
          },
          {
            name: 'Wanita',
            data: [50124, 51312, 32331, 22346],
          },
        ],
      },
      chartColumnOptions: {
        chart: {
          type: 'bar',
          //   height: '400px',
          //   width: '500',
          backgroundColor: 'transparent',
        },
        title: {
          text: 'Statistik Penduduk Lombok',
        },
        subtitle: {
          text: 'Data Penduduk Lombok 2018-2023',
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        tooltip: {
          //   enabled: true,
          // format
          //   format:
          //     ' Tahun {x} <br/> Jumlah Penduduk {series.name} <b>{point.y}</b>',

          // formatter
          //   formatter: function () {
          //     return `<b>Tahun ${this.x}</b> Jumlah Penduduk ${this.series.name}:  ${this.point.y}`;
          //   },
          //   formatter share tooltip
          //   shared: true,
          split: true,
          formatter: function () {
            console.log(this.points);
            return [`<b>Tahun ${this.x}</b> <br/>`].concat(
              this.points
                ? this.points.map(point => {
                    return `Jumlah ${point.series.name}: ${point.y} <br/>`;
                  })
                : []
            );
          },
        },
        legend: {
          align: 'center',
          verticalAlign: 'top',
          layout: 'horizontal',
        },
        xAxis: {
          title: {
            text: 'Tahun',
          },
          categories: ['2018', '2019', '2020', '2021'],
        },
        yAxis: {
          title: {
            text: 'Jumlah Penduduk',
          },
        },
        series: [
          {
            name: 'Pria',
            data: [20124, 21312, 52331, 12346],
          },
          {
            name: 'Wanita',
            data: [50124, 51312, 32331, 22346],
          },
        ],
      },
    };
  },
};
</script>
