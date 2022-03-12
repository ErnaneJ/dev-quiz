<script>
  export let alternatives;

  const clearAllAlternatives = () => {
    console.log('s')
    document.querySelectorAll('input[type="radio"]').forEach(checkbox => {
      checkbox.checked = false;
    });
  }
</script>

<div class="alternatives-container">
  {#each alternatives as alternative, i}
    <label for="alternative-{i}" class="alternative">
      <input class="radio-input" type="radio" name="alternative" id="alternative-{i}">
      <span class="text-alternative">{alternative}</span>
    </label>
  {/each}
</div>

<span class="reset">
  <div class="reset-button" on:click={clearAllAlternatives}>
    <i class="fa-solid fa-arrows-rotate"></i> Clear alternative
  </div>
</span>

<style>
  .alternatives-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 4rem;
    width: 100%;
  }
  .alternative{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .text-alternative{
    margin-left: .5rem;
    color: var(--secondary-color);
    font-weight: bold;

    padding: 1.25rem 1rem;
    width: 100%;
    border-radius: .5rem;
    background-color: var(--alternative-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding-left: 3rem;
  }
  .radio-input{
    z-index: 9;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: transparent;
    border: 2px solid var(--secondary-color);
    border-radius: 0.3em;
    cursor: pointer;
    transform: translateX(40px);
    transition: background-color 300ms, border-color 300ms;
  }
  .radio-input:checked{
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' fill='rgb(49,114,69)' viewBox='-10 -10 64.56 64.56'%3E%3Cpath d='M23.297 38.74a6.563 6.563 0 0 1-10.16.499L1.308 26.112a5.083 5.083 0 1 1 7.551-6.805l8.369 9.288a.617.617 0 0 0 .956-.047L35.386 5.217a5.083 5.083 0 1 1 8.181 6.032L23.297 38.74z'/%3E%3C/svg%3E"), transparent;
		background-repeat: no-repeat;
		border: 2px solid var(--alternative-letter-checked-color);
  }
  .radio-input:checked + span.text-alternative{
    background-color: var(--alternative-checked-color);
    color: var(--alternative-letter-checked-color);
  }
  .reset{
    width: 100%;
    text-align: end;
    margin-top: 1rem;
    color: rgba(0, 0, 0, .8);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .reset-button{ 
    padding: .5rem 1rem;
    background-color: rgba(255, 255, 255, .1);
    max-width: max-content;
    border-radius: 1rem;
  }
  .reset-button:hover{
    background-color: rgba(0, 0, 0, .1);
  }
</style>