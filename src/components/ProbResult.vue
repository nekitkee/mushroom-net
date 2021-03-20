<template>
    <div class="bar-container">
    <div v-for="(item, key) in data" :key="key">
        <span>{{key}}</span>
        <k-progress  :percent="Math.ceil(item*100)" :color="getColor" ></k-progress>
    </div>
    </div>
</template>

<script>
export default {
    name:"ProbResult",
    props:{
        data:{
            required:true
        },
    },
    methods:{
        getColor(percent) {
            if(percent < 40){
                return '#ffc069';
            } else if(percent < 60) {
                return '#fadb14';
            } else if(percent < 80) {
                return '#13c2c2';
            } else {
                return '#389e0d';
            }
        }
    }
}
</script>

<style scoped>
.bar-container{
    padding-top: 2rem;
    padding-left: 1rem;
    width: 400px;
    margin: auto;
}

@media only screen and (max-width: 600px) {
  .bar-container {
   width: 90%;
   /*background-color: aqua;*/
   padding-bottom: 1.5rem;
   padding-left: 2rem;
  }

}

</style>