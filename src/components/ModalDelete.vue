<template>
    <div class="body-modal" v-if="props.ShowModalDelete">
        <div class="modal-card">
            <div class="modal-btn" @click="$emit('close')">
                <p>X</p>
            </div>
            <div class="text-delete">
                ¿Seguro que quiere eliminar este video?
            </div>
            <button class="btn-cancelar" @click="$emit('close')">Cancelar</button>
            <button class="btn-delete" @click="DeleteLink(props.deleteID); $emit('close')">Eliminar</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {  defineProps } from 'vue';
import { db } from "@/utils/ConfigDataBase";
import { doc, deleteDoc } from "firebase/firestore";

// Extraer variables reactivas
const props = defineProps<{
    ShowModalDelete: boolean,
    deleteID:string
}>();

//Eliminar video seleccionado
const DeleteLink = async (id:any) => {
    try {
        await deleteDoc(doc(db, "TestAfexVue", id));
    } catch (error) {
        console.log(error);
    }
    
};
</script>


<style scoped lang="css">
.modal-card {
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

.text-delete {
    position: absolute;
    width: 440px;
    height: 38px;
    left: 90px;
    top: 58px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    /* identical to box height, or 157% */

    text-align: center;

    color: #3C3E41;
}

.btn-cancelar {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    gap: 5px;

    position: absolute;
    width: 250px;
    height: 57px;
    left: 308px;
    top: 141px;

    border: 1px solid #136AE4;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2)) drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14));
    border-radius: 10px;
}

.btn-delete {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    gap: 5px;

    position: absolute;
    width: 253px;
    height: 57px;
    left: 587px;
    top: 141px;

    /* Secundario 2 */

    background: #136AE4;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
    border-radius: 10px;
}
</style>