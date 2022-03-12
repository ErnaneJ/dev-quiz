<script>
  export let title, subtitle;
</script>

<div class="header-question">
  <h1 class="title">{title}</h1>
  <p class="subtitle">{subtitle}</p>
</div>

<style>
  .header-question{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title{
    color: var(--secondary-color);
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    font-family: 'Times New Roman', Times, serif
  }
  .subtitle{
    margin-top: .75em;
    font-weight: bold;
    color: var(--grey-color);
  }
</style>