<template>
    <div class="body-modal">
        <div class="modal-container">
                <div class="modal-btn">
                    <a href="#">X</a>
                </div>
            <div class="modal-grid">

            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
        export default defineComponent({
            name: "MyModal",
    });

</script>
<style lang="css">
    .body-modal::before{
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
    .modal-container{
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
    .modal-btn{
        position: absolute;
        left: 95.01%;
        right: 2.94%;
        top: 8.52%;
        bottom: 87.26%;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: large;
        font-weight: bold;
    }

    .modal-grid{
        position: absolute;
        left: 39px;
        right: 97px;
        top: 60px;
        bottom: 70px;
        border: 2px solid black; 
    }
</style>