<template>
    <transition name="fade" >
        <Mymodal  v-show="showModal" :videosProp="videosProp"  
            />
    </transition>
    <div class="container"> 
        <div class="container-card"  >
            <div class="card" v-for="todo in todos" :key="todo.id">
                <div class="img" @click="showModal=true; varProp(todo.id.toString())" >
                    <img :src="todo.thumb" alt="Thumbnail" class="img-cover"  >
                </div>
                <div class="div-btn" @click="DeleteLink(todo.id)">
                    <button class="btn-close">
                        <span class="span">X</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { db } from "@/utils/ConfigDataBase";
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { FirebaseResponse } from "@/interfaces/InterfaceFireBase";
import Mymodal from "@/components/ModalCenter.vue"


const showModal = ref(false);
const todos = ref<todoInterface[]>([]);

interface todoInterface {
    id: string,
    title: string,
    desc: string,
    url: string,
    thumb: string,
}

let videosProp:any = ref([]);




const varProp = (id:string)=>{
    const val= todos.value.find(todo => todo.id === id) as todoInterface;
    videosProp.value = val
};


const getAllData = async ()  => {
    onSnapshot(collection(db, "TestAfexVue"), (querySnapshot) => {
    const data:any= [];
    querySnapshot.forEach((doc) => {
        let item = doc.data() as FirebaseResponse;
        const todo = {
            id : doc.id,
            title : item.title,
            desc : item.desc,
            url: item.url,
            thumb : item.thumUrl
        }
        data.push(todo)
    });
    todos.value = data;
});
};
getAllData();

const DeleteLink = async (id:any) => {
    await deleteDoc(doc(db, "TestAfexVue", id));
};



</script>
<style lang="css">
.container {
    position: absolute;
    top: 365px;
    left: 434px;
    right: 365px;
    bottom: 365px;
    /* border: 1px solid red; */
    display: grid;

}

.container-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
}




/* card */
.card {
    position: relative;
    width: 263px;
    height: 150px;
    background: #F2F2F2;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    /* border: 1px solid red; */
    float: left;
}

.div-btn {
    position: relative;

}

.btn-close {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 230px;
    top: 8px;
    background: #000000;
    border-radius: 2px;
}

.span {
    color: #F5F5F5;
    font-weight: bold;
}

.img {
    position: absolute;
    width: 263px;
    height: 150px;
    left: 0px;
    top: 0px;
}
.img:active {
  border: 1px solid white;
}
.img-cover{
    object-fit: cover;
    width:100%;
    height:100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>