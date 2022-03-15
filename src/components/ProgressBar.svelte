<script>
  import { Link, useParams } from "svelte-navigator";
  import { statusApp, progressQuestionnaires } from '../lib/stores';

  export let countQuestions, responses;

  let msgButton = "Next question";
  let prefix = responses ? 'answers' : 'quiz';
  
  $: params = useParams();
  $: percent = parseInt($statusApp.currentQuestionId) == 1 ? 0 : (parseInt($statusApp.currentQuestionId) * 100)/countQuestions;

  $: backQuestion = () => {
    if(parseInt($statusApp.currentQuestionId) == 2) return `/${prefix}/${$params.quiz}/`;
    if(parseInt($statusApp.currentQuestionId) > 1) return `/${prefix}/${$params.quiz}/question/${$statusApp.currentQuestionId-1}`;
    return `/${prefix}/${$params.quiz}/`;
  }
  $: nextQuestion = () => {
    if(parseInt($statusApp.currentQuestionId) == parseInt(countQuestions)) {
      msgButton = "Check result!";
      return `/result/${$params.quiz}`
    };
    if(parseInt($statusApp.currentQuestionId) < parseInt(countQuestions)) {msgButton = "Next question"; return `/${prefix}/${$params.quiz}/question/${$statusApp.currentQuestionId+1}`};
  }

  const endQuiz = () => {
    $progressQuestionnaires[$params.quiz].completed = true;
  }
</script>

<div class="progressbar-container">
  <div class="back">
    <Link to="{backQuestion()}">
      <i class="fa-solid fa-arrow-left"></i>
    </Link>
  </div>
  <div class="progress">
    <div class="bar" style="width:{percent}%"></div>
    <span class="tooltip">
      {parseFloat(percent).toFixed(2)}% complete. Keep it up!
    </span>
  </div>
  <div class="next" on:click={endQuiz}>
    <Link to="{nextQuestion()}">
      <span>{msgButton}</span> <i class="fa-solid fa-arrow-right"></i>
    </Link>
  </div>
</div>

<style>
  .progressbar-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 95vw;
    border-radius: .5rem;
    background-color: white;
    position: absolute;
    bottom: 3.5rem;
    box-shadow: 0px 1px 3px grey;
    padding: .25rem .5rem;
    gap: 1rem;
  }

  .progress {
    margin:20px auto;
    padding:0;
    width: 100%;
    height:.5rem;
    background: #ededed;
    border-radius:1rem;
  }

  .bar {
    position:relative;
    float:left;
    min-width:1%;
    height:100%;
    border-radius:1rem;
    background:var(--primary-color);
  }
  .bar::after{
    content: '';
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -5px;
    top: -3px;
    z-index: 999;
    cursor: pointer;
    background-color: var(--primary-color);
  }
  .next *{ color: white; }
  .fa-arrow-right{
    margin-left: .75rem;
    font-size: 1.25rem;
    transform: translateX(50px);
    opacity: 0;
  }
  .next span{
    transform: translateX(15px);
  } 
  .next:hover span, .next:hover .fa-arrow-right{
    transform: translateX(0);
    opacity: 1;
  } 

  .bar:hover ~ .tooltip{
    opacity: 1;
  }

  .tooltip {
    opacity: 0;
    display: inline-block;
    position: absolute;
    bottom: 4rem;
    transform: translateX(-50%);
    color: white;
    background: rgba(0, 0, 0, .7);
    padding: .5rem 1rem;
    width: max-content;
    border-radius: .25rem;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
  }
  .tooltip:before{
    border: solid;
    border-color: #444 transparent;
    border-width: 10px 8px 0 8px;
    content: "";
    left: 45%;
    bottom: -8px;
    position: absolute;
  }
</style>