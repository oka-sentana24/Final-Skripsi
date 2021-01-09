<script>
  import Background from "../../../../static/graduation-995042_1920.jpg"
  import Card from "../../../stories/Card.svelte";
  import Form from "../../../stories/Form.svelte";
  import Button from "../../../stories/Button.svelte";
</script>

<div class="content-login">
  <img class="login-background" src={Background} alt="test">
</div>
<div class="card">
  <Card Card={true}>
    <div class="h-64 grid grid-rows-1 grid-flow-col gap-2">
      <div>
        <div class="title">
          <h1 class="text-3xl">Forum Diskusi</h1>
          <br/>
          <h1 class="text-2xl text-red-600">SMK NEGERI 1 GIANYAR</h1>
        </div>
      </div>
      <div>
        <div class="login">
          <h1 class="text-3xl">Login</h1>
        </div>
        <div class="content-form">
          <Form login={true}></Form>
        </div>
        <div class="btn">
          <Button Button={true}>Submite</Button>
        </div>
      </div>
    </div>
  </Card>
</div>

<style>
    .content-login{
      padding: 30px 20px;
    }
    .login-background{
      border-radius: 1.25em;
      object-fit: cover;
      width: 100%;
      height: auto;
      background-position: center;
    }
    .card{
      position: absolute;
      bottom: -20px !important;
      width: 100%;
      height: auto;
    }
    .btn{
      padding: 20px 20px;
    }
    .title{
      padding: 0px 20px;
    }
</style>
