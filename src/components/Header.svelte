<header>
  <div class="logo">&#60;Dev.Quiz/&#62;</div>
  <div class="page-name">Personality Survey Quiz</div>
  <button class="save-progress">Save Progress</button>
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
  }
  .save-progress{
    height: 100%;
    padding: 1.25rem;
    color: white;
    background-color: var(--secondary-color);
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
</style>