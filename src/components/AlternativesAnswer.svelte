<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { progressQuestionnaires, statusApp } from '../lib/stores';
  import { sanitarizeString } from '../lib/helper';

  $: question = $statusApp.currentQuestion;
  $: quiz = $statusApp.currentQuiz;
  $: nameQuiz = sanitarizeString(quiz.title);
  $: options = Object.values(question.options);
  $: answer = question.answer

  const checkAlternatives = e => {
    let cbxes = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {if(checkbox.checked == true) cbxes.push(checkbox)});
    clear = cbxes.length > 0 ? true : false;
    if(cbxes.length > question.quantity_to_select){
      e.preventDefault();
      cbxes.forEach(checkbox => {
        if(checkbox != e.target){
          checkbox.parentNode.classList.add("baunceAnimation");
          setTimeout(() => {
            checkbox.parentNode.classList.remove("baunceAnimation");
          }, 600);
        } 
      });
    };
  }

  const checkMarkedQuestion = () => {
    let answersMarkedInQuestion = $progressQuestionnaires[nameQuiz] ? $progressQuestionnaires[nameQuiz].markedAnswers[String(parseInt($statusApp.currentQuestionId))] : null;
    if(answersMarkedInQuestion){
      answersMarkedInQuestion.forEach(answer => {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          if(checkbox.getAttribute('data-value') == answer){
            checkbox.checked = true;
          }
        });
      });
    }
  }; 

  const selectAnswer = () => {
    let answers = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      if(checkbox.checked == true) answers.push(checkbox.getAttribute('data-value'));
    }); 
    $progressQuestionnaires[nameQuiz].markedAnswers[String(parseInt($statusApp.currentQuestionId))] = answers;
  }

  const updateStatusQuestions = () => setTimeout(() => checkMarkedQuestion(), 0);

  onMount(() => {
    let quizProgress = $progressQuestionnaires[nameQuiz]
    if(!quiz || !quizProgress || !quizProgress.completed){window.location = '/'}
    updateStatusQuestions();
  })
  statusApp.subscribe(updateStatusQuestions);
  progressQuestionnaires.subscribe(updateStatusQuestions);
</script>

{#key options}
  <div class="alternatives-container" in:fly="{{ y: 200, duration: 1500, delay: 150 }}">
    {#each options as alternative, i}
      <label for="alternative-{i}" class="alternative" on:click={checkAlternatives} on:load={checkMarkedQuestion}>
        <input class="checkbox-input" on:change={selectAnswer} data-value={Object.keys(question.options)[i]} type="checkbox" name="alternative" id="alternative-{i}">
        <span class="text-alternative">{alternative}</span>
        {#if answer.options.includes(Object.keys(question.options)[i])}
            <i class="fa-solid fa-check icon-status-q"></i>
          {:else}
            <i class="fa-solid fa-xmark icon-status-q" target="false"></i>
          {/if}
      </label>
    {/each}
  </div>
  <p class="explanation-answer" in:fly="{{ y: 200, duration: 1300, delay: 400 }}">
    {@html answer.description}
  </p>
{/key}


<style>
  .icon-status-q{
    font-size: 1.5rem;
    margin-left: -2rem;
    color: var(--alternative-letter-checked-color)
  }
  .icon-status-q[target="false"]{
    color: rgb(199, 61, 61);
  }
  .explanation-answer{
    color: var(--secondary-color);
    background-color: rgba(200,200,200,.3);
    border-radius: 1rem;
    padding: .75rem 1.5rem;
    text-align: center;
    margin-top: 2rem;
    max-width: 90%;
  }
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
    user-select: none;
    pointer-events: none;
  }
  .text-alternative{
    margin-left: .5rem;
    color: var(--secondary-color);
    font-weight: bold;
    padding: 1.25rem 3rem;
    width: 100%;
    border-radius: .5rem;
    background-color: var(--alternative-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .checkbox-input{
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
    pointer-events: none;
  }
  .checkbox-input:checked{
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' fill='rgb(49,114,69)' viewBox='-10 -10 64.56 64.56'%3E%3Cpath d='M23.297 38.74a6.563 6.563 0 0 1-10.16.499L1.308 26.112a5.083 5.083 0 1 1 7.551-6.805l8.369 9.288a.617.617 0 0 0 .956-.047L35.386 5.217a5.083 5.083 0 1 1 8.181 6.032L23.297 38.74z'/%3E%3C/svg%3E"), transparent;
		background-repeat: no-repeat;
		border: 2px solid var(--alternative-letter-checked-color);
  }
  .checkbox-input:checked + span.text-alternative{
    background-color: var(--alternative-checked-color);
    color: var(--alternative-letter-checked-color);
  }
</style>