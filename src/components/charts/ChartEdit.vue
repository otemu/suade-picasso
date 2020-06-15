<template>
  <div>
    <h3>Chart Edit</h3>
    <p>click any <strong>name</strong> or <strong>age</strong> in the table to edit</p>
    <table data-cy="edit-table" class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody v-for="item in storeData" :key="item.id">
        <tr>
          <td contenteditable @blur="handleChange($event, item.id, 'name')">{{ item.name }}</td>
          <td contenteditable @blur="handleChange($event, item.id, 'age')">{{ item.age }}</td>
          <td><button data-cy="remove" @click="remove(item.id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  computed: {
    storeData() {
      return this.$store.state.chartData.data;
    },
  },
  methods: {
    handleChange(e, id, objName) {
      const value = e.target.innerText;
      this.$store.dispatch('chartData/update', {
        id,
        type: objName,
        value,
      });
    },
    remove(id) {
      this.$store.dispatch('chartData/remove', {
        id,
      });
    },
  },
};
</script>

<style lang="scss">
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }

  .table td, .table th {
    padding: .75rem;
    vertical-align: center;
    border-top: 1px solid #dee2e6;
  }

  button {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;

    &:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }
}
</style>
