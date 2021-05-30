import { writable } from 'svelte/store'

const storeName = 'todos'

function createTodos() {
  const initial = JSON.parse(localStorage.getItem(storeName)) || []
  const { subscribe, update } = writable(initial)

  const add = (newTodo) => {
    update(prev => [...prev, newTodo])
  }

  const edit = (newTodo) => {
    update(todos => todos.map(todo => todo.id !== newTodo.id ? todo : {
      ...todo,
      ...newTodo,
    }))
  }

  const check = (id) => {
    edit({ id, checked: true })
  }
  
  const rename = (id, title) => {
    edit({ id, title })
  }

  const remove = (...ids) => {
    update(todos => todos.filter(todo => !ids.includes(todo.id)))
  }

  const removeChecked = () => {
    const isNotChecked = todo => !todo.checked
    update(todos => todos.filter(isNotChecked))
  }

  subscribe(todos => localStorage.setItem(storeName, JSON.stringify(todos)) )

  return {
    subscribe,
    edit,
    add,
    check,
    rename,
    remove,
    removeChecked,
  }
}

export const todos = createTodos()
