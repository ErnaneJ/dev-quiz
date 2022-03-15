<script>
  import { Router, Route } from "svelte-navigator";
  import Header from "./components/Header.svelte";
  import Questions from "./pages/Questions.svelte";
  import QuestionsAnswers from "./pages/QuestionsAnswers.svelte";
  import Questionnaires from "./pages/Questionnaires.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Result from './pages/Result.svelte';
  import Blobs from './components/Blobs.svelte';
</script>

<Router>
  <Header/>
  <main>
    <Route path="/" >
      <Questionnaires />
    </Route>
    <Route path="result/:quiz" primary={false}>
      <Result />
    </Route>
    <Route path="answers/:quiz/*" primary={false}>
      <QuestionsAnswers />
    </Route>
    <Route path="quiz/:quiz/*" primary={false}>
      <Questions />
    </Route>
    <Route path="*" primary={false}>
      <NotFound />
    </Route>
  </main>
  <footer>
    Developed with ❤ by <a href="https://www.ernane.dev" target="_blank">Ernane Ferreira</a>.
  </footer>
  <Blobs/>
</Router>

<style>
  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    z-index: 9;
    color: var(--secondary-color);
  }
  footer a{color: var(--secondary-color); text-decoration: underline;}
</style>
