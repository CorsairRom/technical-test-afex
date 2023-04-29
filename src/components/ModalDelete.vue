<template>
    <div class="body-modal" v-if="showModalDelete">
        <div class="modal-card" v-if="showModalDelete">
            <div class="modal-btn" @click="closeModalDelete()">
                <p>X</p>
            </div>
            <h1>{{ showModalDelete }}</h1>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let showModalDelete = ref(true);
const closeModalDelete = () =>{
    showModalDelete.value = false;
    console.log(showModalDelete);
}
</script>
<style scoped lang="css">
    .modal-card{
        position: absolute;
        width: 900px;
        height: 227px;
        left: 414px;
        top: 445px;
        z-index: 9999;
        /* Blanco calido */

        background: #FBFBFB;
        /* card shadow */

        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
        border-radius: 15px;
    }
</style>