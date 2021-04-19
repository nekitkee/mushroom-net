<template>
    <div>
        <h3>{{title}}</h3>
        <div class="txt">  
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    name:"AboutSection",
    props:{
        title:{
            required:true
        },

        text:{
            required:true
        }
    },
}
</script>

<style scoped>
h3{
  margin-bottom: 0.5rem;
}

.txt {
  padding: 0 1rem 0 1rem ;
  margin: auto;
  margin-bottom: 2.7rem;
  max-width: 700px;
}
</style>