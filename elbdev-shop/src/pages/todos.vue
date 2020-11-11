<template>
  <div class="container">
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
    {{ joke }}
    <button @click="addJoke">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapMutations} from 'vuex'

export default Vue.extend({
  mounted() {
    //this.joke = this.$store.getters.getCurrentJoke;
    //console.log(this.$store.getters.getCurrentJoke);

    // action trigger
    this.$store.dispatch('setCurrentJoke');
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
    joke() {
      return this.$store.getters.getCurrentJoke;
    }
  },
  methods: {
    addJoke() {
      this.$store.dispatch('setCurrentJoke');
    },
    addTodo(e) {
      this.$store.commit('addTodo', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'toggleTodo'
    })
  }
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
