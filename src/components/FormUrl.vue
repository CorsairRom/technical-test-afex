
<template>
    <form @submit.prevent="captureInput()">
        <h3>Añadir nuevo video</h3>
        <button type="submit" id="btn-submit">Añadir</button>
        <input type="text" placeholder="Url" required id="input-url" v-model="FormInput" name="FormInput">
    </form>
</template> 

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { YoutubeResponse, Item, Snippet, Thumbnails } from "../interfaces/InterfaceMin";
import { getData } from "../services/youtube.services";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/ConfigDataBase";

let FormInput = ref('');

const captureInput = () => {
    
    const url = FormInput.value;
    try {
        const idVideo = url.split('=')[1].toString();
        console.log(idVideo);
        getData(idVideo).then((data) => {
            let snippet = data as Snippet
            let title = (snippet.thumbnails as Thumbnails).medium.url
            
            AddData(idVideo, snippet.description, title, snippet.title , url);
            FormInput.value = ''
        })     
    }catch (e){
        console.log(FormInput.value);
        console.log(e);
        FormInput.value = ''
    }

    

    
}
const AddData = async (id: string, desc:string, thumUrl:string, title:string, url:string) => {
    await setDoc(doc(db, "TestAfexVue", id), {
        desc,
        thumUrl,
        title,
        url
    });
};

</script>




<style lang="css">
#input-url {
    box-sizing: border-box;
    position: absolute;
    width: 823px;
    left: 356px;
    top: 15.58%;
    bottom: 79.32%;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px 0px 0px 5px;
}

#btn-submit {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 20px;
    gap: 5px;
    position: absolute;
    width: 253px;
    height: 57px;
    left: 1179px;
    top: 174px;
    background: #136AE4;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
    border-radius: 0px 10px 10px 0px;
    color: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

}

h3 {
    position: absolute;
    width: 242px;
    height: 38px;
    left: 356px;
    top: 112px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28.329px;
    line-height: 38px;
    display: flex;
    align-items: center;
    color: #020202;
}
</style>