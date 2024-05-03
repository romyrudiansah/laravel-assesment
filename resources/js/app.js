require('./bootstrap');
import Vue from 'vue';
import App from './App.vue'; // Main Vue component

// Import Vuex store (if using Vuex)
import store from './Store';

// Create Vue instance
const app = new Vue({
    el: '#app',
    store,
    render: h => h(App) // Render the main App component
});
