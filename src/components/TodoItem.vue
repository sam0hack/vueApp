<template>
  <div class="todo-item" v-bind:class="{'is_completed':todo.is_completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button @click="$emit('del-todo',todo.id)" class="delete">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.is_completed = !this.todo.is_completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: white;
  padding: 10px;
  border-bottom: 1px #cccccc dotted;
}

.is_completed {
  text-decoration: line-through;
}
.delete {
  float: right;
  color: white;
  background: red;
  cursor: pointer;
}
</style>