<script>
    export let Card = false;
    export let CardBody = false;
  </script>
  
  <style>
    .main {
      margin: 2rem;
      border-radius: 10px;
      min-width: 300px;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      padding: 1.5rem 1rem;
      background-color: rgba(249, 253, 255, 0.7);
      color: #222;
    }
    .Card {
      box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1);
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
  