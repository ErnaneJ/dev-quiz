<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Header from "./components/Header.svelte";
  import Questions from "./pages/Questions.svelte";
  import Blobs from './components/Blobs.svelte'
</script>

<Router>
  <Header/>
  <main>
    <Route path="questions">
      <Questions />
    </Route>
  </main>
  <Blobs/>
</Router>
