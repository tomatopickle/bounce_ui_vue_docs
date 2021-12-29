# Navigation Panel

A navigation panel is a sidebar that has links to different sections of the same component. It's to be used to show a lot of content in a small space. 
::: demo
```vue
<template>
<div class="center">
  <b-card width="750px" style="margin:15px;">
  <template #prepend>
     <b-nav-panel v-model="navPanel" style="min-width: 150px">
            <template #header>
              <h4>Settings</h4>
            </template>
            <template #1> Appearance </template>
            <template #2> Account </template>
            <template #3> Security </template>
     </b-nav-panel> 
     </template>
     <b-tab-content v-model="navPanel">
            <template #0> <p>
            <h4>Appearance</h4>
            <p>Here you can change you're app's appearance</p>
            </p> </template> 
            <template #1> <p>
            <h4>Account</h4>
            <p>Here you can change you're account information</p>
            </p> </template>
            <template #2> <p>
            <h4>Security</h4>
            <p>Here you can change you're app's security</p>
            </p> </template>
     <b-tab-content>

     </b-card>
    </div>
</template>
<script>
export default {
  data:()=>{
    return {
      navPanel :1
    }
  }
}
</script>
<style>
/* To simulate default styles */
.center{
  max-width:100%;
  padding:5px;
}
</style>
```
:::
