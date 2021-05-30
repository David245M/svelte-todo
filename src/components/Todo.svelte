<script>
  import { todos } from '../store'
  import DeleteTodoButton from './DeleteTodoButton.svelte';

  export let title;
  export let id;
  export let checked;

  let opened = false;

  function edit() {
    opened = true;
  }

  function save() {
    todos.rename(id, title)
    opened = false;
  }

  function check() {
    todos.check(id)
  }
</script>

<li>
  {#if !opened}
    <label>
      <input type="checkbox" {checked} on:change={check} >
      <span>{title}</span>
      <button on:click={edit}>Edit</button>
      <DeleteTodoButton {id}/>
    </label>
  {:else}
    <input bind:value={title}> 
    <button on:click={save}>Save</button>
  {/if}
</li>

<style type="scss">
  label {
    vertical-align: middle;
  }
  
  span {
    transition: all .12s linear;
    text-decoration: line-through;
    text-decoration-color: transparent;
  }

  input {
    margin-right: 0.5em;

    &:checked ~ span {
      text-decoration-color: black;

    }
  }
</style>