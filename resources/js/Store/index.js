import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productTypes: [],
    grades: [],
    sizes: [],
    connections: []
  },
  mutations: {
    setProductTypes(state, productTypes) {
      state.productTypes = productTypes;
    },
    setGrades(state, grades) {
      state.grades = grades;
    },
    setSizes(state, sizes) {
      state.sizes = sizes;
    },
    setConnections(state, connections) {
      state.connections = connections;
    }
  },
  actions: {
    fetchDropdownData({ commit }) {
      // Implement API requests to fetch dropdown data and commit mutations
      // Example:
      // axios.get('/api/product-types').then(response => {
      //   commit('setProductTypes', response.data);
      // });
    }
  },
  modules: {}
});
