<script>
    export let text = true;
    export let CardSide = false;
  </script>
  
  <style>
    .main {
      margin: 2rem;
      border-radius: 10px;
      min-width: 850px;
      max-width: 1000px;
      height: max-content;
      margin-left: auto;
      margin-right: auto;
      padding: 1.5rem 1rem;
      background-color: #fff;
      color: #222;
      box-shadow: rgba(32, 32, 35, 0.08) 0.25rem 0.5rem 2rem 0px;
    }
    .CardSide {
      margin-left: 0px;
      margin-right: 0px;
      height: 100vh;
      width: 50px;
      border: 0px;
      border-radius: 0px;
      box-shadow: rgba(32, 32, 35, 0.08) 0.25rem 0.5rem 2rem 0px;
    }
  
    @media only screen and (max-width: 600px) {
      .main {
        width: 100%;
        min-width: 100%;
        margin: 0;
      }
    }
  </style>
  
  <div class="main" class:CardSide>
    <slot>{text}</slot>
  </div>
  