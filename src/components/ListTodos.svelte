<script>
  import Todo from './Todo.svelte';
  import { todos } from '../store'
</script>

<ul>
  {#each $todos as todo (todo.id)}
    <Todo {...todo} />
  {:else}
    <p>
      Wow... so empty...
    </p>
  {/each}
</ul>

<style> 
  p {
    font-size: 2em;
    padding-top: 2em;
    letter-spacing: 0.05em;
  }
</style>