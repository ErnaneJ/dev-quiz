<script>
  import { useParams } from "svelte-navigator";
  import { Link } from "svelte-navigator";
  import { fly } from 'svelte/transition';
  import { questionnaires, progressQuestionnaires } from '../lib/stores';
  import { sanitarizeString } from '../lib/helper';
  
  $: params = useParams();
  let quiz, nameQuiz, quizProgress;
  $: if(params){
    nameQuiz = $params.quiz;
    quiz = $questionnaires.find(el => sanitarizeString(el.title) == nameQuiz);
    quizProgress = $progressQuestionnaires[nameQuiz];

    checkHitPercentage();
  }

  let hitPercentage = 0.00, topics = [];
  const checkHitPercentage = () => {
    let score = 0
    quiz.questions.forEach((question, index) => { 
      quizProgress.markedAnswers[String(index + 1)].forEach(markedAnswer => {
        if(question.answer.options.includes(markedAnswer)){
          score += (1/parseInt(question.quantity_to_select));
        }
      });
      if(topics.length < 6 && question.topics) topics = topics.concat(question.topics).slice(0,6);
    });
    let percentage = ((score * 100)/quiz.questions.length);
    let timer = setInterval(() => {
      hitPercentage += 0.1;
      if(hitPercentage >= percentage){ 
        clearInterval(timer);
      };
    }, 10);
    
    $progressQuestionnaires[nameQuiz] = {
      ...$progressQuestionnaires[nameQuiz],
      completed: true,
      hitPercentage: parseFloat(percentage),
      topics: topics
    }
  }
</script>
{#key $progressQuestionnaires}
  <div class="result-container">
    <div role="progressbar" 
      aria-valuenow="65" 
      class="percentage" 
      aria-valuemin="0" 
      aria-valuemax="100" 
      style="--value:{hitPercentage}" in:fly="{{ y: -500, duration: 1000}}">

      {hitPercentage.toFixed(2)}%
    </div>

    <p class="text-congratulations" in:fly="{{ y: 500, duration: 1300,}}">
      Congratulations! 🎉 You got {hitPercentage.toFixed(2)}% correct on the quiz. 👏
    </p>

    <div class="back-to-home" in:fly="{{ y: 500, duration: 1300}}">
      <Link to="/" >
        <i class="fa-solid fa-house-chimney"></i> Back to home!
      </Link>
    </div>
    
    {#if topics.length != 0}
      <div class="container-topics" in:fly="{{ y: 500, duration: 1500, delay: 100}}">
        <h2 class="title-topic">
          For a better score study the following topics:
        </h2>
        <div class="topic-list">
          {#each topics as topic}
            <div class="topic">
              <span class="text-topic">{topic}</span>
            </div>
          {/each}
        </div> 
      </div>
    {/if}
  </div>
{/key}

<style>
  .container-topics{margin-top: 1.5rem}
  .title-topic{
    color: var(--secondary-color);
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }
  .topic-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
  }
  .topic{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      user-select: none;
    }
  .text-topic{
    font-weight: bold;
    padding: 1.25rem 1rem;
    width: 100%;
    border-radius: .5rem;
    background-color: var(--alternative-color);
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-transform: capitalize;
  }
.result-container{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100vh - 60px);
  margin-top: 4rem;
}
.text-congratulations{
  margin-top: 3rem;
  color: var(--secondary-color)
}
.back-to-home{
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  color: white;
  background-color: var(--primary-color);
  border: none;
  outline: none;
  border-radius: .25rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, .5);
  cursor: pointer;
  font-size: 1rem;
}
:global(.back-to-home a){
  color: white;
}
.fa-house-chimney{
  margin-right: .5rem;
  color: white
}
.percentage{
	background-color: var(--primary-color);
	border-radius: .4rem;
	transition: .4s;
	cursor: pointer;
  box-shadow: 0px 0px 30px 0px var(--primary-color);
}

.percentage:hover{
	background-color: var(--primary-color);
}

div[role="progressbar"] {
  --size: 250px;
  --pgPercentage: var(--value);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, var(--secondary-color) 90%, transparent 0 99.9%, var(--secondary-color) 0),
    conic-gradient(var(--primary-color) calc(var(--pgPercentage) * 1%), var(--secondary-color) 0);
  font-size: calc(var(--size) / 5);
  color: var(--white-color);
}
</style>