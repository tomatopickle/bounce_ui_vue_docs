# Switch

A switch, also known as a toggle, is used to get a binary input from the user.

::: demo
```vue
<template>
<div class="center">
  <b-switch v-model="switch"></b-switch>
</div>
</template>
<script>
export default{
  data:()=>{
    return{
      switch: true
    }
  }
}
</script>
```
:::