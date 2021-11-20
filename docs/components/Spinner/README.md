# Spinner

A spinner is used to indicate page or element is loading.
::: demo
```vue
<template>
<div class="center">
  <b-spinner></b-spinner>
</div>
</template>
```
:::

## Button

If you want to show a button loading, add the `loading` attribute to the button.

::: demo
```vue
<template>
<div class="center">
   <b-btn color="primary" :loading="loading" @click="loading = !loading">Click to start loading</b-btn>
   <b-btn @click="loading = !loading" class="ml-2" ghost>Toggle Loading</b-btn>
</div>
</template>
<script>
export default{
  data:()=>{
    return{
      loading: true
    }
  }
}
</script>
```
:::

## Card

If you want to show a card loading, add the `loading` attribute to the card.

::: demo
```vue
<template>
<div class="center">
   <b-card width="250px" loading>
     <template v-slot:header>Introducing Bounce UI</template>
     Bounce UI is a design system focused on simplicity and consistency.
     <template v-slot:footer>
     <b-flex>
       <b-spacer></b-spacer>
       <b-btn color="primary" size="small">
       Read More
       <b-icon right name="chevron-right"></b-icon>
       </b-btn>
     </b-flex>
     </template>
   </b-card>
</div>
</template>
```
:::

<style>
.ml-2{
  margin-left: 5px;
}
</style>