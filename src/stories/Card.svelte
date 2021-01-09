<script>
    export let Card = false;
    export let CardBody = false;
  </script>
  
  <style>
    .main {
      margin: 2rem;
      border-radius: 10px;
      min-width: 300px;
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
      padding: 1.5rem 1rem;
      background-color: #fff;
      color: #222;
    }
    .Card {
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
  
  <div class="main" class:Card class:CardBody>
    <slot />
  </div>
  