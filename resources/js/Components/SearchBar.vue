<template>
  <div>
    <select v-model="selectedProductType" @change="handleProductTypeChange">
      <option v-for="type in productTypes" :value="type.id" :key="type.id">{{ type.name }}</option>
    </select>
    <select v-model="selectedGrade" @change="handleGradeChange">
      <option v-for="grade in filteredGrades" :value="grade.id" :key="grade.id">{{ grade.name }}</option>
    </select>
    <select v-model="selectedSize">
      <option v-for="size in filteredSizes" :value="size.id" :key="size.id">{{ size.name }}</option>
    </select>
    <select v-model="selectedConnection">
      <option v-for="connection in filteredConnections" :value="connection.id" :key="connection.id">{{ connection.name }}</option>
    </select>
    <button @click="search">Find</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProductType: null,
      selectedGrade: null,
      selectedSize: null,
      selectedConnection: null
    };
  },
  computed: {
    productTypes() {
      return this.$store.state.productTypes;
    },
    grades() {
      return this.$store.state.grades;
    },
    sizes() {
      return this.$store.state.sizes;
    },
    connections() {
      return this.$store.state.connections;
    },
    filteredGrades() {
      if (this.selectedProductType) {
        return this.grades.filter(grade => grade.productTypeId === this.selectedProductType);
      }
      return [];
    },
    filteredSizes() {
      // Implement logic to filter sizes based on selected product type and grade
      // ...
      return [];
    },
    filteredConnections() {
      // Implement logic to filter connections based on selected product type, grade, and size
      // ...
      return [];
    }
  },
  methods: {
    handleProductTypeChange() {
      this.selectedGrade = null;
      this.selectedSize = null;
      this.selectedConnection = null;
    },
    handleGradeChange() {
      this.selectedSize = null;
      this.selectedConnection = null;
    },
    search() {
      // Implement logic to trigger API request based on selected filters
      const filters = {
        productType: this.selectedProductType,
        grade: this.selectedGrade,
        size: this.selectedSize,
        connection: this.selectedConnection
      };
      this.$emit('search', filters);
    }
  }
};
</script>

<style>
</style>