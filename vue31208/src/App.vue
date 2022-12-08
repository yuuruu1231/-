<script setup>
import AddItem from './components/AddItem.vue'
import Card from './components/Card.vue';
import ItemsList from './components/ItemsList.vue';
import { reactive, ref, computed } from 'vue'

const cart = reactive([
  {name:"baidu",url:"http://www.baidu.com"},
  {name:"google",url:"http://www.google.com"}
]);

function save(data){
  cart.push(data)
 
}
function deleteItem(index){
  cart.splice(index, 1)
}

</script>

<template>
  <div class="container">
    <Card>
      <h4>Add new item</h4>
      <AddItem @addItem="save" />
    </Card>
    <Card>
      <h4>Your items ({{ cart.length }})</h4>
      <ItemsList :items="cart" @deleteItem="deleteItem" />
    </Card>
  </div>
</template>

<style scoped>

</style>
