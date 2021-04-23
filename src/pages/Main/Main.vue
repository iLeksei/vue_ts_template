<template>
  <v-container>
    <div id="msg">hello, world!</div>
    <div>{{personData.firstName}}</div>
  </v-container>
</template>
<script>
  import Vue from 'vue';

  export default {
      name: "Main",
      data() {
          return {
              message: "Hello, world!",
              personData: {
                  firstName: "bob",
              }
          }
      }
  }
</script>
<style scoped>
  #msg {
    font-size: 24px;
    color: lightgreen;
  }
</style>