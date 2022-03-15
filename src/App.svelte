<script>
  import { onMount } from "svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import { statusApp } from './lib/stores';
  import Header from "./components/Header.svelte";
  import Questions from "./pages/Questions.svelte";
  import Questionnaires from "./pages/Questionnaires.svelte";
  import Result from './pages/Result.svelte';
  import Blobs from './components/Blobs.svelte';

  onMount(() => {
    $statusApp.questionnaires = JSON.parse(window.localStorage.getItem('questionnaires')) ?? [];
  });

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
    <Route path="quiz/:quiz/*" primary={false}>
      <Questions />
    </Route>
  </main>
  <Blobs/>
</Router>
