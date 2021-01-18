<script>
  export let text = true;


  export let option = false;
  export let Primary = false;
  export let Secondary = false;
  export let Success = false;
  export let New = false;
  export let canClick = true;
</script>

<style>
  button {
    display: inline-block;
    padding: 5px 15px;
    box-sizing: border-box;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    min-width: 200px;
    max-width: 500px;
    transition: all 0.3s;
    background-color: #FFF;
    color: #000;
    border: 0.75px solid grey;
  }

  .Primary {
    background-color:#007bff;
    color: #fff;
    width: 100%;
  }
  .Secondary{
    background-color:#6c757d;
    color: #fff;
  }

  .Success{
    background-color:#28a745;
    color: #fff;
  }
  .btn.canClick:hover {
    background-color: #fb1759;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn.canClick:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .New{
    border: 1px solid black;
    border-radius: 0px;
  }

  .option {
    padding: 10px 38px;
    border-radius: 8px;
    width: 300px;
    position: relative;
  }
</style>

<button
  class="solid btn"
  class:option
  on:click
  class:Primary
  class:Secondary
  class:Success
  class:New
  class:canClick>
  <slot>{text}</slot>
</button>
