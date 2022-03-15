<script>
  export let code;
  import { fly } from 'svelte/transition';
  import { HighlightAuto } from "svelte-highlight";
  import dracula from "svelte-highlight/src/styles/dracula";
</script>

<svelte:head>
  {@html dracula}
</svelte:head>

{#if code && code != ""}
  <div class="code-container" in:fly="{{ y: 200, duration: 1000 }}">
    <HighlightAuto {code} />
  </div>
{/if}