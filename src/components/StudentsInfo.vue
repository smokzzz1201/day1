<template>
    <div>
   <link rel="stylesheet" id="oform" v-bind:href="chooseOform == 'switch1' ? './switch1.css' : './switch2.css'">
        <button  value="switch1" name="switch" v-on:click="takeOform('switch1')">White</button>
                   <button  value="switch2" name="switch" v-on:click="takeOform('switch2')">Black</button>
     <center style="font-size:35px;">
         <br>  Количество студентов: {{studentsCount}}
          <br> ПІБ: {{student.name}} 
     <br> Оцінка: {{student.mark}} 
     <br> Залік: <input type="checkbox"  v-bind:checked="student.isDonePr">
     <br> Группа: {{student.group}}  </center> 
     
        <img  style = "display:flex;  font-size:25px; margin:auto ;" v-bind:src="student.photo">
  
    </div>

</template>

<script>
import Vue from 'vue'


export default {
      props: {
           id: '',
       },
       data: function() {
           return {
               student: {},
           }},
    
mounted: function (){
    Vue.axios.get("http://46.101.212.195:3000/students/"+this.id)
    .then( (response) => {
        console.log(response.data)
        this.student = response.data;
        this.$store.commit('setCount', 1);
    })
    
},
 computed: {
  studentsCount () {
    return this.$store.getters.getCount
  },
         chooseOform () {
    return this.$store.getters.getOform
  }

  
},
methods: {
    takeOform: function(oform) {
            this.$store.commit('setOform', oform)
        },
},
}
</script>
