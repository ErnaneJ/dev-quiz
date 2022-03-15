<script>
  import { fly } from 'svelte/transition';
  import { progressQuestionnaires, statusApp, questionnaires } from '../lib/stores';
  import { Link } from "svelte-navigator";
  import { sanitarizeString } from '../lib/helper'
  export let quiz, id;

  const quizName = sanitarizeString(quiz.title);
  $: progress = $progressQuestionnaires[quizName];

  const createOrResetAttr = () => {
    console.log(quizName)
    $progressQuestionnaires[quizName] = {
      completed: false,
      markedAnswers: {},
    }
  }

  let continueOrStart = 'Start';

  progressQuestionnaires.subscribe(v => {
    if($progressQuestionnaires[quizName]){
      let countAnswers = Object.keys($progressQuestionnaires[quizName].markedAnswers).length;
      let totalPossibleAnswers = $questionnaires.find(q => sanitarizeString(q.title) == quizName).questions.length;   
      if($progressQuestionnaires[quizName].completed) continueOrStart = false;
      if(countAnswers < totalPossibleAnswers) continueOrStart = 'Continue';
      if(countAnswers == 0) continueOrStart = 'Start';
    }
  });

</script>
{#key quiz}
  <div class="container-quiz" in:fly="{{ y: 200, duration: 1500, delay: id*250 }}">
    <img class="cover-image" src="{quiz.cover_image}" alt="cover imagem to quiz">
    <div class="content">
      <h2 class="title-quiz">{quiz.title}</h2>
      <p class="description-quiz">{quiz.description}</p>
      <div class="footer">
        <div class="actions">
          {#if continueOrStart}
            <div class="action" target="start" >
              <Link to="/quiz/{sanitarizeString(quiz.title)}" on:click={createOrResetAttr}>
                <i class="fa-solid fa-circle-play"></i>
                {continueOrStart}
              </Link>
            </div>
          {/if}
          {#if progress && progress.completed}
            <div class="action" target="result">
              <Link to="/result/{sanitarizeString(quiz.title)}"><i class="fa-solid fa-square-poll-vertical"></i> Result</Link>
            </div>
            <div class="action" target="reset" on:click={createOrResetAttr}>
              <Link to=""><i class="fa-solid fa-arrow-rotate-right"></i> Reset</Link>
            </div>
          {/if}
        </div>
        <div class="info-quiz">
          {#if quiz.language}<div class="info" title="Language"><i class="fa-solid fa-language"></i> <span>{quiz.language}</span></div>{/if}
          {#if quiz.theme}<div class="info" title="Theme"><i class="fa-solid fa-tag"></i><span>{quiz.theme}</span></div>{/if}
          {#if quiz.questions}<div class="info" title="Questions"><i class="fa-solid fa-flag"></i> <span>{quiz.questions.length}</span></div>{/if}
          {#if quiz.version}<div class="info" title="Version"><i class="fa-solid fa-code-branch"></i> <span>{quiz.version}</span></div>{/if}
          {#if progress && progress.completed}
            <div class="info" title="Score"><i class="fa-solid fa-star"></i> <span>{parseFloat(progress.hitPercentage)}%</span></div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/key}

<style>
  .container-quiz{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: var(--alternative-color);
    opacity: .95;
    padding: 1rem 2rem;
    border-radius: 1rem;
    box-shadow: 0px 1px 3px grey;
  }.container-quiz:hover{
    transform: translateY(-5px);
  }
  .title-quiz{
    color: var(--secondary-color);
  }
  .description-quiz{
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #4f4f4f;
  }
  .cover-image{
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
    border-radius: 1rem;
    cursor: pointer;
  }
  .info-quiz{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1rem;
  }
  .info{
    margin: 0 .5rem;
    background-color: var(--secondary-color);
    padding: .25rem .75rem;
    color: white;
    border-radius: 1rem;
  }
  .info i {
    margin-right: .25rem;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .actions{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  .action{
    margin-top: 1rem;
    font-size: 1rem;
    padding: .5rem .75rem;
    color: white;
    background-color: var(--secondary-color);
    border: none;
    outline: none;
    border-radius: .25rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .5);
    cursor: pointer;
    display: flex;
    gap: .25rem;
    min-width: 91px;
  }
  .action[target="start"]{
    background-color: var(--primary-color);
  }
  .action[target="result"]{
    background-color: rgb(68, 124, 68);
  }
  .action[target="reset"]{
    background-color: rgb(190, 77, 77);
  }
</style>