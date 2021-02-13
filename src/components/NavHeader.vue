<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Mushroom-Net
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
         <router-link to="/">Home</router-link> 
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/api">API</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/about">About</router-link> 
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>
