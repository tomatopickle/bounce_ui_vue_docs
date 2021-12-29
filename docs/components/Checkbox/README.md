# Checkbox

A checkbox is also used to get a binary input from the user. The onyl difference between a checkbox and a swithc is a checkbox indicates a positive action whereas a switch is neutral.

::: demo
```vue
<template>
<div class="center">
  <b-checkbox v-model="checkbox"></b-checkbox>
</div>
</template>
<script>
export default{
  data:()=>{
    return{
      checkbox: true
    }
  }
}
</script>
```
:::