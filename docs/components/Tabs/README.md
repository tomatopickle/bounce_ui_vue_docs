# Tabs <Badge text="alpha" type="danger"></Badge>

Tabs are a navigation element used to display multiple pages in one view. Tabs should be on top of the page and also should be centered. Here's an example 

::: tip

Make sure the space between each tabs isn't too much, as that won't look good. In the give example we used `350px` as width, but this would change according to the number of tabs you have

:::

::: demo
```vue
<template>
<div class="center">
  <b-tab v-model="tab_index" :tabs="tabs"></b-tab>
</div>
</template>
<script>
export default{
  data: () =>{
    return{
      tabs: [
        { name: "Tab1",value: 1},
        { name: "Tab2",value: 2},
        { name: "Tab3",value: 3},
      ],
      tab_index: 1
    }
  }
}
</script>
```
:::

The tabs component has two attributes, `v-model` which gives you the index of the active tab and `tabs` in which you give the tabs' text and icons.

## With Icons

Tab's can also have icons, this uses [icon](/bounce_ui_vue_docs/components/icon) component.

::: demo
```vue
<template>
<div class="center">
  <b-tab v-model="tab_index" :tabs="tabs"></b-tab>
</div>
</template>
<script>
export default{
  data: () =>{
    return{
      tabs: [
        { name: "Music", value: "music", icon: "music" },
        { name: "Photos", value: "photo", icon: "image" },
        { name: "Videos", value: "videos", icon: "movie" },
      ],
      tab_index: 1
    }
  }
}
</script>
```
:::

<style>
  .center{
    width:350px;
  }
</style>

