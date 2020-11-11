export const state = () => ({
  list: []
})

export const mutations = {
  addTodo(state, text) {
    console.log('add');
    state.list.push({
      text,
      done: false
    })
  },
  removeTodo(state, {todo}) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggleTodo(state, todo) {
    todo.done = !todo.done
  }
}

export default {
  state,
  mutations
}
