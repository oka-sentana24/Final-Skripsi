<script>
    export let text = true;
    export let CardSide = false;
  </script>
  
  <style>
    .main {
      margin: 2rem;
      border-radius: 10px;
      min-width:min-content;
      max-width:max-content;
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
      min-width: 150px;
      max-width: 250px;
      height: 90vh;
      border: 0px;
      border-radius: 0px;
      box-shadow: rgba(32, 32, 35, 0.08) 0.25rem 0.5rem 2rem 0px;
      margin: 0rem;
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
  