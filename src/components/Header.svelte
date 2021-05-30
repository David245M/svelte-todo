<script>
  import AddTodo from "./AddTodo.svelte";
  import DeleteAllButton from './DeleteAllButton.svelte'
  import DeleteCheckedButton from './DeleteCheckedButton.svelte'

</script>

<header>
  <AddTodo />
  <DeleteCheckedButton />
  <DeleteAllButton />
</header>

<style>
  header {
    display: flex;
    gap: 0.5em;
  }
</style>