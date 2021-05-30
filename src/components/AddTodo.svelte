<script>
  import { todos } from '../store'

  let title = ''

  function onSubmit() {
    todos.add({
      title,
      checked: false,
      id: new Date().getTime(),
    })
    title = ''
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <input bind:value={title} placeholder="TODO title">
  <button type="submit" class="pure-button pure-button-primary">Add Todo</button>
</form>