<script>
  import { statusApp } from '../lib/stores';
  import { Link } from "svelte-navigator";
  export let quiz;

  const link = () => {
    return quiz.title.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, "-");
  }

  const addQuiz = () => {
    if($statusApp.questionnaires.filter(q => q.title == quiz.title ).length == 0){
      $statusApp.questionnaires = [...$statusApp.questionnaires, {
        title: quiz.title,
        hitPercentage: null,
        markedAnswers: [],
        inProgress: true
      }]
    }
  }
</script>

<div class="container-quiz">
  <img class="cover-image" src="{quiz.cover_image}" alt="cover imagem to quiz">
  <div class="content">
    <Link to="/quiz/{link()}" on:click={addQuiz}><h2 class="title-quiz">{quiz.title}</h2></Link>
    <p class="description-quiz">{quiz.description}</p>
    <div class="info-quiz">
      <div class="info" title="Theme"><i class="fa-solid fa-tag"></i><span>{quiz.theme}</span></div>
      <div class="info" title="Questions"><i class="fa-solid fa-flag"></i> <span>{quiz.questions.length}</span></div>
      <div class="info" title="Version"><i class="fa-solid fa-code-branch"></i> <span>{quiz.version}</span></div>
    </div>
  </div>
</div>

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
    cursor: pointer;
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
</style>