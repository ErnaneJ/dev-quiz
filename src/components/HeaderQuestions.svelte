<script>
  import { fly } from 'svelte/transition';
  export let title, subtitle;
</script>

{#key title}
  <div class="header-question" in:fly="{{ y: -200, duration: 1500 }}">
    <h1 class="title">{title}</h1>
    <p class="subtitle">{subtitle}</p>
  </div>
{/key}

<style>
  .header-question{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title{
    color: var(--secondary-color);
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    font-family: 'Times New Roman', Times, serif
  }
  .subtitle{
    margin-top: .75em;
    font-weight: bold;
    color: var(--grey-color);
  }
</style>