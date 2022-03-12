<script>
  let percent = 48.75;
</script>

<div class="progressbar-container">
  <div class="back">
    <i class="fa-solid fa-arrow-left"></i>
  </div>
  <div class="progress">
    <div class="bar" style="width:{percent}%"></div>
    <span class="tooltip">
      {parseFloat(percent).toFixed(2)}% complete. Keep it up!
    </span>
  </div>
  <div class="next">
    <span>Next question</span> <i class="fa-solid fa-arrow-right"></i>
  </div>
</div>

<style>
  .progressbar-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 95vw;
    border-radius: .5rem;
    background-color: white;
    position: absolute;
    bottom: 2rem;
    box-shadow: 0px 1px 3px grey;
    padding: .25rem .5rem;
    gap: 1rem;
  }
  .back{
    color: var(--backbutton-color);
    padding: .5rem 1rem;
    border-radius: .25rem;
    font-weight: bold;
    font-size: 1.25rem;
    cursor: pointer;
    background-color: var(--backbutton-bgcolor);
  }

  .progress {
    margin:20px auto;
    padding:0;
    width: 100%;
    height:.5rem;
    background: #ededed;
    border-radius:1rem;
  }

  .bar {
    position:relative;
    float:left;
    min-width:1%;
    height:100%;
    border-radius:1rem;
    background:var(--primary-color);
  }
  .bar::after{
    content: '';
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -5px;
    top: -3px;
    z-index: 999;
    cursor: pointer;
    background-color: var(--primary-color);
  }

  .next{
    color: white;
    padding: .85rem 2rem;
    border-radius: .5rem;
    font-weight: bold;
    min-width: max-content;
    cursor: pointer;
    background-color: var(--nextbutton-bgcolor);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fa-arrow-right{
    margin-left: .75rem;
    font-size: 1.25rem;
    transform: translateX(50px);
    opacity: 0;
  }
  .next span{
    transform: translateX(15px);
  } 
  .next:hover span, .next:hover .fa-arrow-right{
    transform: translateX(0);
    opacity: 1;
  } 

  .bar:hover ~ .tooltip{
    opacity: 1;
  }

  .tooltip {
    opacity: 0;
    display: inline-block;
    position: absolute;
    bottom: 4rem;
    transform: translateX(-50%);
    color: white;
    background: rgba(0, 0, 0, .7);
    padding: .5rem 1rem;
    width: max-content;
    border-radius: .25rem;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
  }
  .tooltip:before{
    border: solid;
    border-color: #444 transparent;
    border-width: 10px 8px 0 8px;
    content: "";
    left: 45%;
    bottom: -8px;
    position: absolute;
  }
</style>