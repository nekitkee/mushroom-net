<template>
  <div class="hello">    
    <picture-input 
      ref="pictureInput"
      width="256" 
      height="256" 
      radius="4"
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="download"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag and drop'
      }"
      @change="onChange">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'ImagePreview',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
        this.$emit('onselected',  this.$refs.pictureInput.file )
      } else {
        console.log('FileReader API not supported')
      }
    }
  }
}
</script>
