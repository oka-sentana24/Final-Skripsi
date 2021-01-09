<script>
  export let option = false;
  export let firstColor = false;
  export let secondColor = false;
  export let thirdColor = false;
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
    width: 100%;
    transition: all 0.3s;
    background-color: #e74a50;
    color: #fff;
  }

  .firstColor {
    background-color:black;
    color: #fff;
  }

  .secondColor {
    background-color: #21c0f4;
    color: #fff;
  }

  .thirdColor {
    background-color: #7c7c7c;
    color: #fff;
  }

  button:focus {
    outline: none;
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
  class:firstColor
  class:secondColor
  class:thirdColor
  class:canClick>
  <slot />
</button>
