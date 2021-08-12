<template>
  <div class="chart" style="position: relative; height:400px; width:800px">
    <Bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      />
  </div>
</template>

<script>
import BarChart from './Chart.vue'
const axios = require("axios")

export default {
  name: 'BarChartContainer',
  components: { BarChart },
  data: () => ({
    loaded: false,
    chartdata: { 
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: 'green'
          
        },
      ]
    },
  }),
  async mounted () {
    this.loaded = false
      axios.get("/api/coins")
      .then(response => {
        response.data.data.map((element,index) => {
        this.chartdata.datasets[0].data.push(Number(element.market_cap_usd).toFixed(2))
        if(index < 20){
          this.chartdata.labels.push(element.symbol)
        }
        console.log(this.chartdata.labels) 
        }) 
      })
      .then(this.loaded = true)
  }
}
</script>

<style>
.chart {
  background-color: rgb(255, 254, 254);
}
</style>