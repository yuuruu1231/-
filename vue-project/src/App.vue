<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <p>aaaaaaaaaaaaaa</p>
      <!-- <HelloWorld msg="You did it!" /> -->
      <h1>bbbbbbbbbbb</h1>

      <nav>
        <ul>
          <li>aaaaaaaaaaaaaa</li>
          <li>bbbbbbbbbbb</li>
          <li>ccccccc</li>
        </ul>
        <a href="www.baidu.com">baidu</a>

      <button class="button-basic" id="button" @click="yes">yes</button>
      <button class="button-submit" id="button" @click="no">no</button>
      <button class="button-report" id="button" @click="or">or</button>
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@mixin  transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}

.button-basic  {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button-report  {
  @extend .button-basic;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #17f31e;
  border: none;
  border-radius: 15px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.button-submit  {
  @extend .button-basic;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #9ad876;
  border: none;
  border-radius: 15px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

#button:hover {background-color: #c444b9}

#button:active {
  background-color: #4bd814;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
$myColor: red;

p {
  @include sexy-border(blue);
  background-color: rgb(153, 214, 153);
  // $myColor: green !global;
  // color: $myColor;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

// header {
//   line-height: 1.5;
//   max-height: 100vh;
//   color: $myColor;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// nav {
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   margin-top: 2rem;
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
