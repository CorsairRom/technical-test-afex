<template>
    <div class="container">
        
            <div class="container-card">
                <div class="card">
                    <div class="img">
            
                    </div>
                    <div class="div-btn">
                    <button class="btn-close">
                        <span class="span">x</span>
                    </button>
                    </div>
                </div>            
                <div class="card">
                    <div class="img">
            
                    </div>
                    <div class="div-btn">
                    <button class="btn-close">
                        <span class="span">x</span>
                    </button>
                    </div>
                </div>            
                
            </div>
                
    </div>
    
</template>
<script lang="ts">
    import { defineComponent } from "vue";
        export default defineComponent({
            name: "MyGalery",
    });
</script>
<style lang="css">
    
    .container {
        position: absolute;
        top: 365px;
        left: 434px;
        right: 365px;
        bottom: 365px;
        border: 1px solid red;
        display: grid;
        
    }
    
    .container-card{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }




    /* card */
    .card{     
        position: relative;
        width: 263px;
        height: 150px;
        background: #FBFBFB;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
        /* border: 1px solid red; */
        float: left;
    }
    .div-btn{
        position: relative;
        
    }
    .btn-close{
        position: absolute;
        width: 24px;
        height: 24px;
        left: 230px;
        top: 8px;
        background: #000000;
        border-radius: 2px;
    }
    .span{
        color: #F5F5F5;
        font-weight: bold;
    }
    .img{
        position: absolute;
        width: 263px;
        height: 150px;
        left: 0px;
        top: 0px;
        border: 1px solid red;
    }
</style>