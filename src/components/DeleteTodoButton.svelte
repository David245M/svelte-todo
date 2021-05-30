<script>
  import { todos } from '../store'
  export let id;

  function onClick() {
    todos.remove(id)
  }
</script>

<button on:click={onClick}>
  Delete
</button>