import Vue from 'vue';
import Vuetify from "vuetify";
import "@babel/polyfill";
import "vuetify/dist/vuetify.min.css";

import Main from "./pages/Main/Main.vue";
import App from "./App.vue";


Vue.use(Vuetify);

new Vue({
    // el:"#app",
    // template: "<div></div>",
    vuetify: new Vuetify(),
    render: app => app(App),
}).$mount("#app");