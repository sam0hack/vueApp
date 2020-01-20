<template>
  <div>
    <form @submit="addTodo">
      <input v-model="title" type="text" name="title" placeholder="Add new Todo" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newData = {
        title: this.title,
        is_completed: false
      };

      //Send up to the parent
      this.$emit("add-todo", newData);
      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>