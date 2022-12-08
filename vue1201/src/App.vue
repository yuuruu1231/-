<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";

export default {
  data() {
    return {
      items: [
        { id: 1, name: "田中" },
        { id: 2, name: "渡辺" },
        { id: 3, name: "木村" },
      ],
      newId: 4,
    };
  },

  methods: {
    add() {
      this.items.push({
        id: this.newId++,
        name: this.newName,
      });
      this.newName = "";
    },
  },
};

// const items = [
//   {name: '田中'},
//   {name: '渡辺'},
//   {name: '木村'},
// ]
</script>

<template>
  <form v-on:submit.prevent="add" style="margin :20px">
    <label for="new-todo">お名前</label><br>
    <input v-model="newName" placeholder="お名前を入力してください"  style="margin-right :20px"/>
    <button>追加</button><br/>
  </form>
  <ul>
    <li v-for="item in items" :key="item.id" :name="item.name">
      <input type="checkbox" />
      <label for="checkbox"></label>{{ item.name }}
    </li>
  </ul>

  <RouterView />
</template>

<style scoped>
input{
  padding: 10px;
}
button{
  padding: 8px;
}

</style>
