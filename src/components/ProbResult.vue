<template>
    <div class="bar-container">
    <div v-for="(item, key) in data" :key="key">
        <span class="mushroom-label">{{key}}</span>
        <k-progress class="bar" :percent="Math.ceil(item*100)" :color="getColor" :active="true" bg-color="#dfe3e6"></k-progress>
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
.bar{
    padding-left: 1rem;
    margin-top: 2px;
    margin-right: -5px;
}

.bar-container{
    padding-top: 2rem;
    width: 400px;
    margin: auto;
}

@media only screen and (max-width: 600px) {
  .bar-container {
   width: 90%;
   /*background-color: aqua;*/

   padding-top: 1.2rem;
   padding-bottom: 1.5rem;
   padding-left: 0.5rem;
   padding-right: 0.5rem;
  }
}
</style>