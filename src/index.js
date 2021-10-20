
var students = [{
    "id" : 1,
    "pib" : "Sladkova Olga",
    "zdav" : true,
    "group" : "RPZ 17 2/9",
    "src": "https://orig00.deviantart.net/ee08/f/2009/073/e/d/free_red_panda_icon_100x100_by_supertuffpinkpuff.png"
},
{
    "id" : 2,
    "pib" : "Dragan Olga",
    "zdav" : false,
    "group" : "RPZ 17 1/9",
    "src": "https://cdn-learn.adafruit.com/assets/assets/000/012/878/thumb100/led_strips_doge.bmp?1386611464"
},
{
    "id" : 3,
    "pib" : "Buro Olga",
    "zdav" : true,
    "group" : "RPZ 17 2/9",
    "src": "https://vignette.wikia.nocookie.net/adventuretime/images/9/99/AT_Icons_100x100_Jake.jpg/revision/latest?cb=20120919222926&path-prefix=ar"
}
]
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
new Vue({
     el: '#app',
     data: {
         students: [],
         search:'',
         currency:[],
         start_ccy:"",
         end_ccy:"",
         sell:0,
         buy:0,
         start_value:0,
         end_value:0,
         result:"",
     },	 
     mounted: function(){
         this.students = students;
     },
     mounted: function(){
         axios.get("http://46.101.212.195:3000/students").then((response) => {
         console.log(response.data);
         this.students = response.data; })
         axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((response)=>{
            console.log(response.data);
            this.currency = response.data;
        })
},

     
     methods: {
        deleteStudent(studId) {
            this.students = this.students.filter(elem => {
                return elem.id != studId;
            });
        },
        addStudent() {
            this.student.id = this.students.length+1;
            this.students.push(this.student);
        },
        convert:function(){
            for(let i=0; i<this.currency.length; i++){
                if (this.currency[i].ccy==this.start_ccy)
                      this.sell=this.currency[i].sale;
                if (this.currency[i].ccy==this.end_ccy)
                      this.buy=this.currency[i].buy;
            }
            this.end_value=(this.start_value*this.sell)/this.buy;
            this.result = this.start_value + " " + this.start_ccy + " --> " + this.end_value + " " + this.end_ccy;
            
        }
     },
  
 });

