<template>
  <div class="about">
    <h1>About</h1>

    <about-section title="🍄 What is Mushroom-scan?" text="This application is created as part of my bachelor thesis. 
    The goal of this work was to train a convolutional neural network for mushroom species identification
    and create a simple user interface to allow users utilize this classifier.">
    </about-section>

    <about-section title="⚰️ Disclaimer" text="Accuracy of the resulting model is 85%. DON'T use this application as real expert system.
      Mushroom-scan developers team is not responsible for any consequences.">
    </about-section>

    <about-section title="🛠 Version" text="V0.2 - demo.">
    </about-section>

    <about-section title="📞 Contacts" text="mr.kuznecovs.nikita@gmail.com">
    </about-section>

  </div>
</template>

<script>
import AboutSection from '../components/AboutSection.vue';

export default {
  name: 'AboutPage',
  components: { AboutSection}
}
</script>
