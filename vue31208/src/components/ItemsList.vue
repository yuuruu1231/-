<script setup> 
import {defineEmits} from 'vue'

defineProps(['items'])

const emit = defineEmits(['deleteItem'])

function removeItem(index) {
  emit("deleteItem", index)
}
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="item.name" class="row my-1">
      <div class="col">
        <a :href="item.url" target="_blank">
          <h5>{{ item.name }}：{{ item.url }}</h5>
        </a>
      </div>
      <div class="cols col-auto">
        <button class="btn btn-danger" @click="removeItem(index)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

