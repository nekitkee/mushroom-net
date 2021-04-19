<template>
  <div class="MushroomWidget">

    <div v-if="alertIsVisible" class="alert" >
    <vs-alert :active="alertIsVisible" color="danger" icon="new_releases" >
      <span> Ops...server error </span>
    </vs-alert>
    </div>
  
   
    

    <div class="container">
      <div class="row">
        <div class="col-sm">
          
        <h2 v-if="!alertIsVisible">{{title}} </h2>
        <div>
          <image-preview @onselected="fileSelected"/>
        </div>
        
        <button v-if="selectedFile" class="newbutton bluebtn" @click="onUpload">Upload</button>
        
        

      
    <br>

     </div>
      <div class="col-sm">


        <loader  v-if="loaderIsVisible" class="loader"/>
        <prob-result v-if="resultIsVisible" :data="sortedProbabilities" />
        <div class="wikilink">
          <a v-if="resultIsVisible" :href="wikilink">👉🏻 Read more on Wiki... 👈🏻</a>
        </div>
         </div>
  </div>
</div>

  </div> 
</template>

<script>
import axios from "axios";
import ImagePreview from './ImagePreview.vue';
import Loader from './Loader.vue';
import ProbResult from './ProbResult.vue';

export default {
  name: 'MushroomWidget',
  components: {
    ImagePreview, Loader,
    ProbResult
  },
  data() {
    return {
        selectedFile: null,
        probabilities: null,
        sortedProbabilities: null,
        loaderIsVisible: false,
        resultIsVisible: false,
        alertIsVisible: false,
        title:"Upload mushroom picture and see what happens 🔎"
  }
},

  computed:{
    wikilink: function () {
      return "https://en.wikipedia.org/wiki/" + this.title
    }
  },

  methods: {
    fileSelected(file){
      this.selectedFile = file
      this.title = "Let's go! 🚀"
      this.resultIsVisible = false
    },

    showLoader(isVisible){
      this.alertIsVisible = false 
      this.loaderIsVisible = isVisible
      this.resultIsVisible = !isVisible
    },


    sortResult(probObj){
      var listProb = Object.entries(probObj)
      listProb.sort(function(a, b) { return b[1] - a[1] })
      var max = 0
      listProb.forEach(element => {
        if (element[1]>listProb[max][1]){
           max = listProb.indexOf(element)  
        }
      })
      this.title = listProb[max][0]
      this.sortedProbabilities = Object.fromEntries(listProb);
    },

    logResult(){
      for (const [key, value] of Object.entries(this.probabilities)) {
        console.log(`${key}: ${value}`);
      }
    },

    async onUpload() {
      this.showLoader(true)
      const formData = new FormData()
      formData.append('file', this.selectedFile)
      try{
          const response = await axios.post('https://apim.mushroomscan.com/api/predict', formData) 
          this.probabilities = response.data
          this.sortResult(this.probabilities)
          this.logResult()
          this.showLoader(false)
      }
      catch(err){
          console.error(err)
          this.loaderIsVisible = false
          this.alertIsVisible = true
      }
    }
  }
}
</script>

<style>
.wikilink{
  margin-bottom: 5rem ;
} 

a{
  color: #2C3E50;
  /*text-decoration: underline;*/

}

.alert{
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 18rem;
  margin: auto;
}
.newbutton {
  display: inline-block;
  
  padding:0.6em;
  width: 16em;
  
  margin:0 0 0 0;
  border-radius:0.22em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
}

.bluebtn{
  color:#FFFFFF;
  background-color: #24a0ed;
  border:0.1em solid #FFFFFF;
}

.bluebtn:hover{
  background-color:#2883c1;
}


.whitebtn{
  color:#24a0ed;
  background-color: #FFFFFF;
  border:0.1em solid #FFFFFF;
}

.whitebtn:hover{
  /*background-color:#2883c1;*/
  border:0.1em solid #24a0ed;
}

@media all and (max-width:30em){
.newbutton{
  
  margin:0.4em auto;
}
}


h2 {
  margin: 40px 40px 40px;
}

*{box-sizing: border-box}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:0 0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\201C" "\201D" "\2018" "\2019"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0;vertical-align: middle}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}

b {
  position: relative;
  display: block;
  /*font-family: helvetica neue, helvetica, sans-serif;*/
  line-height: 1.15em;
  margin-top: -1.15em;
  top: 2.3em;
  font-size: 0.87em;
  font-weight: 400;
  letter-spacing: 0.025em;
  opacity: 0.75;
  text-align: center;
}

b span {
  font-size: 0.785em;
  font-weight: 400;
  opacity: 0.4;
}

#container {
	width: 400px;
	margin: 120px auto 0;
}

.loader {
  display: inline-block;
  margin-top: 3rem;
}
/*

.download {
  display: inline-block;
  text-decoration: none;
  border: 2px solid #D9EDFF;
  color: #339DFF;
  font-size: 13px;
  text-align: center;
  line-height: 38px;
  border-radius: 100px;
  padding: 0 22px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: #fff;
  width: 170px;
	margin-right: 40px;
}

.download:hover {
  box-shadow: 0 2px 4px rgba(83, 100, 255, 0.45);
}
*/

/*
.download2 {
  display: inline-block;
  margin-right: 10px;
  background: #339DFF;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  line-height: 38px;
  border-radius: 50px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 170px;
  text-align: center;
}

.download2:hover {
  background: #fff;
  color: #339DFF;
  box-shadow: 0 4px 4px rgba(83, 100, 255, 0.32);
}
*/
</style>