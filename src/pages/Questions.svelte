<script>
  import { useParams } from "svelte-navigator";
  import { questionnaires, statusApp } from '../lib/stores';
  import HeaderQuestions from '../components/HeaderQuestions.svelte';
  import Alternatives from '../components/Alternatives.svelte';
  import ProgressBar from '../components/ProgressBar.svelte';

  const link = (title) => {
    return title.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, "-");
  }

  const params = useParams();

  params.subscribe(() => {
    const currentQuiz = $questionnaires.filter(quiz => link(quiz.title) === $params.quiz)[0];
    const currentQuestionId =  $params['*'] != "" ? parseInt($params['*'].split('/')[1]) : 1;
    $statusApp = {
      ...$statusApp,
      currentQuiz: $questionnaires.filter(quiz => link(quiz.title) === $params.quiz)[0],
      currentQuestionId: currentQuestionId,
      currentQuestion: currentQuiz.questions[currentQuestionId - 1]
    }
  });
  
</script>

<section class="container container-questions">
  <HeaderQuestions title={$statusApp.currentQuestion.statement} subtitle="SELECT UP TO {$statusApp.currentQuestion.quantity_to_select} OPTIONS"/>
  <Alternatives question={$statusApp.currentQuestion}/>
  <ProgressBar countQuestions={$statusApp.currentQuiz.questions.length}/>
</section>

<style>
  .container-questions{
    margin-top: -10rem;
  }
</style>
