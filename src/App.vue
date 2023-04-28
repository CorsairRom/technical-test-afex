<template>
  <Form></Form>
  <Galery></Galery>
  <!-- <Modal></Modal> -->
</template>

<script lang="ts" setup>
  import Form from './components/FormUrl.vue';
  import Galery from './components/GaleryUrl.vue';
  import Modal from './components/ModalCenter.vue';
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
