import {Bar} from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function() {
        return {
            datacollection: {
                labels: ["Prawn omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"],
                datasets: [{
                    label: "Label",
                    backgroundColor: ["black", "black", "black", "black", "black", "black"],
                    data: [0,0,0,0,0,0]
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Total Quantity Ordered for Each Item"
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    console.log(" ");
                    console.log("doc.data().order -> " + doc.data().order); // An array
                    this.datacollection.datasets[0].data[0] += doc.data().order[0];
                    this.datacollection.datasets[0].data[1] += doc.data().order[1];
                    this.datacollection.datasets[0].data[2] += doc.data().order[2];
                    this.datacollection.datasets[0].data[3] += doc.data().order[3];
                    this.datacollection.datasets[0].data[4] += doc.data().order[4];
                    this.datacollection.datasets[0].data[5] += doc.data().order[5];
                    console.log("current data ->" + this.datacollection.datasets[0].data);
                })
                this.renderChart(this.datacollection, this.options);
            })
        }
    },
    created() {
        console.log("created");
        this.fetchItems();
    }
}