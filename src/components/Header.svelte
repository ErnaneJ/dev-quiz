<script>
  import { Link } from "svelte-navigator";
  import { statusApp, progressQuestionnaires } from '../lib/stores';

  let msgSaveButton = "Save Progress";
  const saveProgress = () => {
    window.localStorage.setItem("progressQuestionnaires", JSON.stringify($progressQuestionnaires))
    msgSaveButton = "Saved! 🎉";
    setTimeout(() => {
      msgSaveButton = "Save Progress";
    }, 500);
  }
</script>

<svelte:head>
  <title>&#60;Dev.Quiz/&#62; | {$statusApp.currentQuiz?.title ?? "Questionnaires"}</title>
</svelte:head>

<header>
  <Link to="/"><div class="logo">&#60;Dev.Quiz/&#62;</div></Link>
  <div class="page-name">{$statusApp.currentQuiz?.title ?? "Questionnaires"}</div>
  <button on:click={saveProgress} class="save-progress">{msgSaveButton}</button>
</header>

<style>
  header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }
  .logo{
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: bold;
    padding: 1rem 0 0 1rem;
    position: relative;
    font-size: 1.25rem;
  }
  .logo::after{
    content: '';
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40%;
    left: 8%;
    z-index: -1000;
    background-color: var(--primary-color);
  }
  .page-name{
    padding: 1rem 0 0 0;
    color: var(--primary-color); 
    font-weight: bold;
    text-align: center;
  }
  .save-progress{
    height: 100%;
    padding: 1.25rem;
    color: white;
    background-color: var(--secondary-color);
    border: none;
    cursor: pointer;
    font-weight: 600;
    cursor: pointer;
  }
</style>