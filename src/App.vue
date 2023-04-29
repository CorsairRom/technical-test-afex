<template>
  <Form></Form>
  <Galery></Galery>
  <!-- <Mymodal></Mymodal> -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Form from './components/FormUrl.vue';
import Galery from './components/GaleryUrl.vue';
import Mymodal from "@/components/ModalCenter.vue"
import { db } from "@/utils/ConfigDataBase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { FirebaseResponse } from "@/interfaces/InterfaceFireBase";
// onMounted(async() => {
//   const getAllData = async () => {
//     const querySnapshot = await getDocs(collection(db, "TestAfexVue"))
    
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`)
//       let da = doc.data() as FirebaseResponse
//       console.log(da);
//     });
//   }
//   console.log("funcionando");
//   getAllData()

// })


</script >

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
