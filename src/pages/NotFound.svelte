<script>
  import { statusApp } from '../lib/stores';

  $statusApp.titleApp = "404 - DevQuiz";
</script>

<svelte:head>
  <meta name="robots" content="noindex">
</svelte:head>

<section class="section">
	<div class="container content-error">
		<svg width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
			<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
					<path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
					<path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
					<path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
					<path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
					<path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
			</g>
		</svg>
		<div class="message-box">
			<h1 class="section__title">404!</h1>
			<p class="section__subtitle">
				<span>The page you are looking for may have been removed, renamed, or temporarily unavailable.</span>
				<span>Please try to go to the previous page or go back to the beginning.</span>
			</p>
			<div class="buttons">
        <p onclick="history.back()" class="button-link">
          <i class="fas fa-arrow-left"></i>
          Previous page
        </p>
        <p onclick="window.location = '/'" class="button-link">
          <i class="fas fa-home svelte-xo3g9u"></i>
          Home page 
        </p>
			</div>
		</div>
	</div>
</section>

<style>
	svg{width:100%;}
  .buttons{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    gap: 1rem;
  }
  .button-link{
    margin-top: 1.5rem;
    padding: 1rem 1.5rem;
    color: white;
    background-color: var(--primary-color);
    border: none;
    outline: none;
    border-radius: .25rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, .5);
    cursor: pointer;
    font-size: 1rem;
  }
  .section{
    margin-top: -10rem;
  }
	.section__title{
		font-size: 5rem;
	}
	.section__title, .section__subtitle{
		text-align: start;
		margin-bottom: 1rem;
    color: var(--secondary-color)
	}
	.section__subtitle{
		font-size: 1rem;
	}
	.section__subtitle span{
		display: inline-block;
		margin-bottom: .75rem;
	}
	.content-error{
		position: relative;
		width: 100%;
		height: 100%;
		display:flex;
    flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 1.5rem 0;
	}
	.message-box {
		height:100%;
		width: 100%;
		color: var(--text-color);
	}

#Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  animation-delay: .2s; 
}
#Polygon-3 {
  animation-delay: .4s; 
}
#Polygon-4 {
  animation-delay: .6s; 
}
#Polygon-5 {
  animation-delay: .8s; 
}

@keyframes float {
	100% {
    transform: translateY(20px);
  }
}
@media (max-width: 760px) {
	.content-error{
		flex-direction: column;
	}
	.message-box{
		height: 100%;
		width: 100%;
		color: var(--text-color);
		z-index: 9;
	}
	svg{
		position: absolute;
		width: 50vw;
		top: 0;
		height: 50%;
		right: 0;
		opacity: .7;
		z-index: -1;
	}
}
</style>