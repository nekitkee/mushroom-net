<template>
  <div class="MushroomWidget">
    <h2>Upload mushroom picture and see what happens...</h2>
    <image-preview @onselected="fileSelected"/>
    <button v-if="selectedFile" class="download2" @click="onUpload">Upload</button>
    <br>
    <!--<Loader  v-if="loading" />-->
    
    <prob-result v-if="probabilities" :data="probabilities" />
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
        loading:false
  }
},
  methods: {
      fileSelected(file){
          this.selectedFile = file
    },
    async onUpload() {
        this.loading = true
        const formData = new FormData()
        formData.append('file', this.selectedFile)
        try{
            const response = await axios.post('http://192.168.137.39:5000/predict', formData) 
            this.probabilities = response.data
            for (const [key, value] of Object.entries(this.probabilities)) {
                console.log(`${key}: ${value}`);
            }
        }catch(err){
            console.error(err)
        }
        this.loading = false
    }
  }
}
</script>

<style>
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
</style>