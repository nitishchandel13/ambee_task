<template>
  <div class="">
    <navbar></navbar>
    <h1>Air Quality Index</h1>
    <div style="display: inline-grid;">
      <p class="index">Computation of the AQI requires an air pollutant concentration over a specified averaging period, obtained from an air monitor or model. Taken together, concentration and time represent the dose of the air pollutant. Health effects corresponding to a given dose are established by epidemiological research. Air pollutants vary in potency, and the function used to convert from air pollutant concentration to AQI varies by pollutant. Its air quality index values are typically grouped into ranges. Each range is assigned a descriptor, a color code, and a standardized public health advisory.</p>
      <p class="index">The AQI can increase due to an increase of air emissions (for example, during rush hour traffic or when there is an upwind forest fire) or from a lack of dilution of air pollutants. Stagnant air, often caused by an anticyclone, temperature inversion, or low wind speeds lets air pollution remain in a local area, leading to high concentrations of pollutants, chemical reactions between air contaminants and hazy conditions.</p>
          <button class="buttonstyle" @click="gotoaqipage()">Calculate AQI</button>
    </div>
  </div>
</template>

<script>
import navbar from './navbar'
export default {
  name: 'home',
  components: {navbar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoaqipage: function () {
      this.$router.push('/calculateaqi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonstyle {
  height: 30px;
  width: 230px;
  background: #5f5f5f;
  margin: auto;
  color: white;
  font-size: 15px;
}
.index {
  font-size: 20px;
  /* width: 600px;
  height: 300px; */
  padding-left: 7px;
  text-align: left;
  display: inline-block;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
