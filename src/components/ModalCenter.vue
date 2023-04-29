
<template>
    <div class="body-modal"  v-if=props.showModal >
        <div class="modal-container">
            <div class="modal-btn" @click="$emit('close')">
                <p>X</p>
            </div>
            <div class="modal-div">
                <div class="modal-grid">
                    <div class="modal-min" >
                        <img :src=props.videosProp.thumb class="img-expand">
                    </div>
                    <div class="modal-title">
                        <div class="div-title">
                            <h5>{{ props.videosProp.title }}</h5>
                        </div>
                        <div class="div-p">
                            <p>{{ props.videosProp.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p>{{ props.showModal }}</p>
    </div>
    
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { toRefs, defineProps } from 'vue';



interface todoInterface {
    id?: string,
    title?: string,
    desc?: string,
    url?: string,
    thumb?: string,
}

const props = defineProps<{
    videosProp:todoInterface,
    showModal:boolean
}>();





</script>
<style lang="css">
.body-modal::before {
    content: "";
    position: absolute;
    width: 1728px;
    height: 1117px;
    left: 0px;
    top: 0px;
    z-index: 9998;
    background: #020202;
    opacity: 0.7;
}

.modal-container {
    position: absolute;
    width: 1096px;
    height: 438px;
    left: 356px;
    top: 336px;
    z-index: 9999;
    /* Blanco calido */

    background: #FBFBFB;
    /* card shadow */

    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
}

.modal-btn {
    position: absolute;
    left: 95.01%;
    right: 2.94%;
    top: 8.52%;
    bottom: 87.26%;
}

a {
    text-decoration: none;
    color: black;
    font-size: large;
    font-weight: bold;
}

.modal-div {
    position: absolute;
    left: 39px;
    right: 97px;
    top: 60px;
    bottom: 70px;
    
}

.modal-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    
}

.modal-min {
    position: relative;
    width: 492px;
    height: 308px;
    background: rgba(0, 0, 0, 0.5);
}

.img-expand{
    object-fit: cover;
    width:100%;
    height:100%;
}

.modal-title {
    position: relative;
    width: 451px;
    height: 38px;
    top: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    
    /* identical to box height, or 157% */

    text-align: center;

    color: #3C3E41;
}
.div-title{
    overflow: hidden;
    display: flex;
    width: 400px;
    height: 120px;
    overflow: hidden;
    line-height: 22px;
    text-align: justify;
}
.div-p{
    display: flex;
    width: 400px;
    height: 120px;
    overflow: hidden;
    font-size: smaller;
    line-height: 20px;
    text-align: justify;
}




.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0
}
</style>