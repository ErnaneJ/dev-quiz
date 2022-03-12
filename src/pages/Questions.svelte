<script>
  import HeaderQuestions from '../components/HeaderQuestions.svelte';
  import Alternatives from '../components/Alternatives.svelte';
  import ProgressBar from '../components/ProgressBar.svelte';

  const alternatives = [
    'A new Hope',
    'Return of the Jedi',
    'Solo: A Star Wars Story',
    'The Empire Strikes Back',
    'The Force Awakens',
    'The Cllone Wars',
    'Rogue One: A Star Wars Story',
    'The Last Jedi',
    'Not The Phantom Menace',
    'The Third Gathers: Backstroke of the West'
  ];
</script>

<section class="container container-questions">
  <HeaderQuestions title="Pick three of your fevorite Star Wars films" subtitle="SELECT UP TO 3 OPTIONS"/>
  <Alternatives alternatives={alternatives}/>
  <ProgressBar/>
</section>

<style>
  .container-questions{
    margin-top: -10rem;
  }
</style>
