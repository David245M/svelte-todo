<script>
  import { todos } from '../store'

  function onClick() {
    todos.removeChecked()
  }
</script>

<button on:click={onClick} type="button">
  Delete done
</button>