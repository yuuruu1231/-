<script setup>
import { reactive, ref, computed } from 'vue'
import {defineEmits} from 'vue'
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
// const state = ref({ count: 0 })
// function increment(){
//   state.value.count++
// }
// const author = reactive({
//   name: 'John Doe',
//   books:[
//     'vue 1',
//     'vue 2',
//     'vue 3'
//   ]
// })
// const publishedBoooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No' 
// })
// const isActive = ref(true)
// const hasError = ref(true)
// const items = ref([{id:1,message:'Foaaaao'},{id:2,message:'Bassssssar'}])

const emit = defineEmits(['addItem'])

const inputs = reactive({name:"", url:""}) 
function submit(){
  if (!inputs.url.includes('http')){
        inputs.url = `http://${inputs.url}`
      }
      const data = JSON.parse(JSON.stringify(inputs))
      emit("addItem", data);
      inputs.name = "";
      inputs.url = "";
}

</script>

<template>
  <form class="form" @submit.prevent="submit">
    <div class="mb-3">
      <label class="form-label"> Name </label>
      <input v-model="inputs.name" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label"> URL </label>
      <input v-model="inputs.url" type="text" class="form-control" />
    </div>
    <button type="submit" class="btn btn-success">
      Add
    </button>
  </form>

</template>
