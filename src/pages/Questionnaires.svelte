<script>
  import { questionnaires } from '../lib/stores';
  import QuizCard from '../components/QuizCard.svelte'
</script>

<section class="container container-questionnaires">
  {#each $questionnaires as quiz, i}  
    <QuizCard bind:quiz id={i}/>
  {/each}
</section>

<style>
  .container-questionnaires{
    overflow: auto;
    max-height: 90vh;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
</style>