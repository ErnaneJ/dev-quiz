<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Header from "./components/Header.svelte";
  import Questions from "./pages/Questions.svelte";
  import Questionnaires from "./pages/Questionnaires.svelte";
  import Result from './pages/Result.svelte'
  import Blobs from './components/Blobs.svelte'

</script>

<Router>
  <Header/>
  <main>
    <Route path="/">
      <Questionnaires />
    </Route>
    <Route path="quiz/:quiz/result">
      <Result />
    </Route>
    <Route path="quiz/:quiz/*">
      <Questions />
    </Route>
  </main>
  <Blobs/>
</Router>
