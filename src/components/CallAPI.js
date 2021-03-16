import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                    label: "north",
                    borderColor: "green",
                    fill: false,
                    data: []
                }, {
                    label: "south",
                    borderColor: "purple",
                    fill: false,
                    data: []
                }, {
                    label: "east",
                    borderColor: "blue",
                    fill: false,
                    data: []
                }, {
                    label: "west",
                    borderColor: "red",
                    fill: false,
                    data: []
                }, {
                    label: "central",
                    borderColor: "pink",
                    fill: false,
                    data: []
                }, {
                    label: "national",
                    borderColor: "brown",
                    fill: false,
                    data: []
                }
            ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI 24-Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23')
        .then(response => {
            //console.log(response.data.items)
            response.data.items.forEach(data => {
                console.log(data);
                this.datacollection.labels.push(data.timestamp);
                this.datacollection.datasets[0].data.push(data.readings.psi_twenty_four_hourly.north);
                this.datacollection.datasets[1].data.push(data.readings.psi_twenty_four_hourly.south);
                this.datacollection.datasets[2].data.push(data.readings.psi_twenty_four_hourly.east);
                this.datacollection.datasets[3].data.push(data.readings.psi_twenty_four_hourly.west);
                this.datacollection.datasets[4].data.push(data.readings.psi_twenty_four_hourly.central);
                this.datacollection.datasets[5].data.push(data.readings.psi_twenty_four_hourly.national);
            })
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}