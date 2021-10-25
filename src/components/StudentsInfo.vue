<template>
    <div>
   
     <center style="font-size:35px;"> <br> ПІБ: {{student.name}} 
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
    })
    
}
}
</script>
