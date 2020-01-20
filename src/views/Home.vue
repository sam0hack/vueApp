<template>
  <div class="home">
    <Header />

    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="removeTodo" />
  </div>
</template>

<script>
// @ is an alias to /src

import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Todos from "../components/Todos";
import axios from "axios";
export default {
  name: "home",
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    removeTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo.id !== id)));
    },
    addTodo(newtodo) {
      const { title, is_completed } = newtodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          is_completed
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch();
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data))
      .catch();
  }
};
</script>
