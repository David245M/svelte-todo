<script>
  import { todos } from '../store'
  
  let ids;

  $: ids = $todos.map(todo => todo.id)

  function onClick() {
    todos.remove(...ids)
  }
</script>

<button on:click={onClick} type="button">
  Delete All
</button>