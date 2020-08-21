<template>
  <div class="">
    <navbar></navbar>
    <h1>Calculate AQI</h1>
    <div class="container">
      <div class="row">
        <div class="col-25">
          <label>Select a Pollutant</label>
        </div>
        <div class="col-25">
        <select v-model="selectedOption">
          <option value="" disabled selected>Select your option</option>
          <option v-for="(value,i) in options" :key="i">{{ value }}</option>
        </select>
        </div>
        <div class="col-25">
          <label>Units</label>
        </div>
        <div class="col-25">
          <input type="text" value="ug/m3" disabled/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label>Your Name</label>
        </div>
        <div class="col-25">
        <input type="text" placeholder="Customer Name" v-model="cname" />
        </div>
        <div class="col-25">
          <label>Your Email-Id</label>
        </div>
        <div class="col-25">
          <input type="text" placeholder="Customer Email id" v-model="emailId" />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label>Enter The Concentration</label>
        </div>
        <div class="col-25">
          <input type="text" placeholder="Enter The Concentration" v-model="concentaration"/>
        </div>
        <div class="col-25">
          <input type="submit" id="calculate" @click="getTheAqi()" value="Calculate">
          <input type="submit" id="reset" @click="resetEveryField()" value="Reset">
        </div>
      </div>
    </div>
    <!--div class="datainput">
        <label>Select a Pollutant</label>
        <select v-model="selectedOption">
          <option value="" disabled selected>Select your option</option>
          <option v-for="(value,i) in options" :key="i">{{ value }}</option>
        </select>
        <div style="margin-left: 20px">
            <label>units</label>
            <input type="text" value="ug/m3" disabled/>
        </div>
    </div>
    <div class="datainput">
        <label class="">Your name</label>
        <input type="text" v-model="cname" />
        <label class="">your emailId</label>
        <input type="text" v-model="emailId" />
    </div>
    <div class="displayb">
        <label>Enter the Concentration:</label>
        <input type="text" v-model="concentaration"/>
        <button @click="getTheAqi()">calculate</button>
        <button @click="resetEveryField()">reset</button>
    </div-->
    <div class="allresulats">
      <div class="row">
        <div class="col-25">
          <label>AQI</label>
        </div>
        <div class="col-25">
          <input type="text" disabled v-model="aqi"/>
        </div>
        <div class="col-25">
          <label>AQI Category</label>
        </div>
        <div class="col-25">
          <input type="text" disabled v-model="rangevalue" :style="{background: color[rangevalue]}"/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label>Sensitive Groups</label>
        </div>
        <div class="col-25">
          <textarea disabled v-model="generalMessage"></textarea>
        </div>
        <div class="col-25">
          <label>Health Effects Statements</label>
        </div>
        <div class="col-25">
          <textarea disabled v-model="healthEffectsStatements"></textarea>
        </div>
        <div class="col-25">
          <label>Cautionary Statements</label>
        </div>
        <div class="col-25">
          <textarea disabled v-model="guidanceStatement"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from './navbar'
import swal from 'sweetalert'
export default {
  name: 'calculateaqi',
  components: {navbar},
  data () {
    return {
      options: ['PM10', 'PM2.5', 'SO2', 'NO2', 'O3', 'CO'],
      selectedOption: '',
      concentaration: '',
      aqi: '',
      rangevalue: '',
      generalMessage: '',
      healthEffectsStatements: '',
      guidanceStatement: '',
      emailId: '',
      cname: '',
      color: {
        '': '',
        'Good': 'rgb(0, 224, 0)',
        'Moderate': 'rgb(255, 255, 0)',
        'Unhealthy for Sensitive Groups': 'rgb(255, 118, 0)',
        'Unhealthy': 'rgb(255, 0, 0)',
        'Very Unhealthy': 'rgb(153, 0, 73)',
        'Hazardous': 'rgb(126, 0, 35)'
      }
    }
  },
  methods: {
    resetEveryField: function () {
      this.selectedOption = ''
      this.concentaration = ''
      this.aqi = ''
      this.rangevalue = ''
      this.guidanceStatement = ''
      this.healthEffectsStatements = ''
      this.generalMessage = ''
      this.emailId = ''
      this.cname = ''
    },
    getTheAqi: function () {
      if (this.selectedOption === '' || this.concentaration === '' || this.cname === '' || this.emailId === '') {
        swal('Oh noes!', 'Please enter name, emailId, concentration and also select option', 'error')
        return
      }
      var body = {
        pName: this.selectedOption,
        pValue: this.concentaration,
        cName: this.cname,
        cEmailId: this.emailId
      }
      axios.post('http://localhost:5000/api/threads/createThreads', body).then(r => {
        this.aqi = r.data.aqi
        this.rangevalue = r.data.category
        this.guidanceStatement = r.data.guidanceStatement
        this.generalMessage = r.data.generalMessage
        this.healthEffectsStatements = r.data.healthEffectsStatements
      })
        .catch(err => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[id=calculate] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
}
input[id=reset] {
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
.allresulats {
    border: 2px solid #5e5e5e;
    padding-top: 20px;
}
h1, h2 {
  font-weight: normal;
}
</style>
