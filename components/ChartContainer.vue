<template>
  <div class="chart">
    <Bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      />
      <p>denetgswaedhysme</p>
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
          backgroundColor: '#665191'
          
        },
      ]
    },
  }),
  async mounted () {
    this.loaded = false
    try {
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
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style>
.chart {
  background-color: rgb(163, 160, 160);
}
</style>