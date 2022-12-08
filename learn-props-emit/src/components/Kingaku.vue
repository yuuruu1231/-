<template>
  <div>
    <h1>This is a emit sample</h1>
    
    <!-- # パターン1:受け取った値をそのまま使う場合は$eventで受け取る
         # パターン2:受け取った値をメソッドの引数で受け取る -->
    <!-- <Child @sumClick="sumPrice = $event" /> -->
    <!-- <Child @sumClick="funSumPrice($event)" /> -->
    <Child @sumClick="funSumPrice" />
    <hr />
    <p>合計金額: {{ sumPrice }} 円</p>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {  
  data () {
    return {
      sumPrice: 0,
    };
  },
  components: {
    Child,
  },

  methods: {
    funSumPrice(value) {
      this.sumPrice = value;
    },
  },
};
</script>
<style>
p {
  font-size: 40px;
}
</style>
