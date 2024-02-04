import { ChartOptions } from 'nuxt-highcharts/lib/types';
<template>
  <div class="flex justify-between px-8 py-4">
    <div class="text-xxl font-semibold">Advance Charts</div>
  </div>
  <div class="grid gap-4 px-8 mb-8">
    <div class="shadow-md p-4 rounded-md bg-blue-200">
      <highchart
        :options="chartWeatherOptions"
        :modules="['exporting']"
      />
    </div>
    <div class="shadow-md p-4 rounded-md bg-pink-200">
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
      chartWeatherOptions: {
        chart: {
          type: 'column',
          //   height: '400px',
          //   width: '500',
          //   backgroundColor: 'transparent',
          backgroundColor: 'white',
        },
        title: {
          text: 'Perkiraan Cuaca Bulanan',
          align: 'left',
        },
        subtitle: {
          text: 'Perkiraan Cuaca Bulanan pada Tahun 2024',
          align: 'left',
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        legend: {
          align: 'center',
          verticalAlign: 'top',
          layout: 'horizontal',
        },
        xAxis: {
          title: {
            text: 'Bulan',
          },
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
        yAxis: [
          {
            title: {
              text: 'Temperatur',
            },
            labels: {
              format: '{value}°C',
            },
          },
          {
            title: {
              text: 'Kelembaban Udara',
            },
            labels: {
              format: '{value}%',
            },
          },
          {
            title: {
              text: 'Kecepatan Angin',
            },
            labels: {
              format: '{value}km/jam',
            },
            opposite: true,
          },
        ],
        series: [
          {
            name: 'Temperatur',
            type: 'column',
            tooltip: {
              valueSuffix: '°C',
            },
            data: [25, 29, 27, 26, 30, 31, 28, 33, 35, 27, 34, 32],
          },
          {
            name: 'Kelembaban Udara',
            type: 'spline',
            yAxis: 1,
            tooltip: {
              valueSuffix: '%',
            },
            marker: {
              enabled: false,
            },
            dashStyle: 'shortdot',
            data: [85, 90, 87, 89, 95, 92, 88, 91, 90, 93, 85, 90],
          },
          {
            name: 'Kecepatan Angin',
            type: 'spline',
            yAxis: 2,
            tooltip: {
              valueSuffix: 'km/jam',
            },
            data: [12, 14, 18, 20, 16, 17, 14, 16, 13, 18, 16, 19],
          },
        ],
      },
      chartOptions: {
        chart: {
          //   type: 'column',
          //   height: '400px',
          //   width: '500',
          //   backgroundColor: 'transparent',
          backgroundColor: 'white',
        },
        title: {
          text: 'Statistik Penduduk Surabaya',
          align: 'left',
        },
        subtitle: {
          text: 'Data Penduduk Surabaya 2018-2023',
          align: 'left',
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
          categories: ['2018', '2019', '2020', '2021', '2022'],
        },
        yAxis: {
          title: {
            text: 'Jumlah Penduduk',
          },
        },
        series: [
          {
            name: 'Pria',
            type: 'column',
            data: [70, 80, 120, 125, 122],
          },
          {
            name: 'Wanita',
            type: 'column',
            data: [75, 88, 130, 145, 152],
          },
          {
            name: 'Rata-rata',
            type: 'line',
            step: 'center',
            data: [72, 84, 125, 135, 137],
          },
          {
            name: 'Total',
            type: 'pie',
            size: '120',
            center: [50, 44],
            innerSize: '30%',
            dataLabels: {
              enabled: false,
            },
            data: [
              {
                name: 'Pria',
                y: 517,
              },
              {
                name: 'Wanita',
                y: 590,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
