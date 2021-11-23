# Modal

A modal is an overlay that requires the user to interact with it and is designed to elicit a response from the user. It basically uses the [card](/bounce_ui_vue_docs/components/Card) element to show the interface.

## Default

::: demo
```vue
<template>
<div class="center">
  <b-btn @click="modal = true" color="primary">Open Modal</b-btn>
  <b-modal v-model="modal" width="375px">
    <b-card>
      <b-flex class="modal-header">
        <h1>Login</h1>
        <b-spacer></b-spacer>
        <b-btn @click="modal = false" ghost icon
          ><b-icon name="mdi mdi-close"></b-icon
        ></b-btn>
      </b-flex>
      <p>
        <b-input ghost label="User Name" placeholder="User Name">
          <template v-slot:inner-prepend>
            <b-icon name="mdi mdi-account"></b-icon>
          </template>
        </b-input>
        <b-input
          class="my-1"
          type="password"
          ghost
          placeholder="Password"
          label="Password "
        >
          <template v-slot:inner-prepend>
            <b-icon name="mdi mdi-lock"></b-icon>
          </template>
        </b-input>
      </p>
      <br />
      <template v-slot:footer>
        <b-btn block color="primary">Login</b-btn>
        <b-divider borderless>Or</b-divider>
        <b-btn block ghost color="primary">Sign Up</b-btn>
      </template>
    </b-card>
  </b-modal>
</div>
</template>
<script>
export default{
  data:()=>{
    return {
      modal: false
    }
  }
}
</script>
```
:::

## Persistent

By default, if the user clicks the modal backdrop, the modal gets closed. Add the `persistent` attribute if you don't want this.

::: demo
```vue
<template>
<div class="center">
  <b-btn @click="modal = true" color="primary">Open Modal</b-btn>
  <b-modal v-model="modal" width="350px" persistent>
    <b-card glass>
      <template v-slot:header>What's your name?</template>
      <p>
        <b-input placeholder="You're Name"></b-input>
      </p>
      <template v-slot:footer>
        <b-flex>
        <b-spacer></b-spacer>
        <b-btn class="mx-1" @click="modal = false">Cancel</b-btn>
        <b-btn class="mx-1" @click="modal = false" color="primary">Save</b-btn>
        </b-flex>
      </template>
    </b-card>
  </b-modal>
</div>
</template>
<script>
export default{
  data:()=>{
    return {
      modal: false
    }
  }
}
</script>
```
:::

## Glass

If you're modal is just a dialog, which means you just want to give a message to you're user, you can use the [glass](/bounce_ui_vue_docs/components/Card#glass) attribute and [floating footer](/bounce_ui_vue_docs/components/Card#floating-footer) slot to make a nice looking dialog.

::: demo
```vue
<template>
<div class="center">
  <b-btn @click="modal = true" color="primary">Open Modal</b-btn>
  <b-modal v-model="modal" width="350px">
    <b-card glass>
      <template v-slot:header>You Sure?</template>
      <p>
        If you delete all this, I'm just testing but something will happen
        in your future!
      </p>
      <br />
      <template v-slot:float>
        <b-btn class="mx-1" @click="modal = false">Cancel</b-btn>
        <b-btn class="mx-1" @click="modal = false" color="danger">Delete</b-btn>
      </template>
    </b-card>
  </b-modal>
</div>
</template>
<script>
export default{
  data:()=>{
    return {
      modal: false
    }
  }
}
</script>
```
:::

## Custom

As promised, you can easily create a custom modal. Instead of using the card element, you can use any element inside the modal. We'll just provide the backdrop for the element.

::: demo
```vue
<template>
<div class="center">
  <b-btn @click="modal = true" color="primary">Open Modal</b-btn>
  <b-modal v-model="modal" width="350px">
    <div>
      <h1 style="font-size:75px;">Hello world!</h1>
    </div>
  </b-modal>
</div>
</template>
<script>
export default{
  data:()=>{
    return {
      modal: false
    }
  }
}
</script>
```
:::

<style>
.mx-1{
  margin-left:5px;
  margin-right:5px;
}
</style>