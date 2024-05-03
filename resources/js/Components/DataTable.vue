<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Product Type</th>
          <th>Grade</th>
          <th>Size (OD)</th>
          <th>Connection</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in searchResults" :key="item.id">
          <td>{{ item.productType }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.connection }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    searchResults: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
</style>