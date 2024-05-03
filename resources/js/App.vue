<template>
  <div id="app">
    <SearchBar @search="handleSearch" />
    <DataTable :searchResults="searchResults" />
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar.vue';
  import DataTable from './components/DataTable.vue';

  export default {
    components: {
      SearchBar,
      DataTable
    },
    data() {
      return {
        searchResults: []
      };
    },
    methods: {
      handleSearch(filters) {
        // Implement logic to trigger API request with search filters
        // and update searchResults with API response
        // axios.post('/api/search', filters).then(response => {
        //   this.searchResults = response.data;
        // });
        // For mock data:
        this.searchResults = [
          { productType: 'Casing', grade: 'A', size: '8"', connection: 'Threaded', quantity: 100 },
          { productType: 'Casing', grade: 'B', size: '10"', connection: 'Butt Weld', quantity: 50 }
        ];
      }
    },
    created() {
      this.$store.dispatch('fetchDropdownData');
    }
  };
</script>

<style>
/* Add custom styles here */
</style>