# Flex Box

The `flex-box` component is very useful in making simple flex box fast. It can be used in a lot of situations in a lot of ways. One such way is to show action buttons for a card or modal.

:::tip

This component doesn't provide margin to child elements, so make sure to add them

:::

:::demo

```vue
<template>
<div class="center">
  <b-flex>
    <b-btn color="primary">Accept</b-btn>
    <b-btn ghost>Cancel</b-btn>
  </b-flex>
</div>
</template>
```
:::

## Spacer

`b-spacer` is a basic yet versatile spacing component used to distribute remaining width in-between a parents child components. When placing a single `b-spacer` before or after the child components, the components will push to the right and left of its container. When more than one `b-spacer`'s are used between multiple components, the remaining width is evenly distributed between each spacer.

:::demo

```vue
<template>
<div class="center">
<b-card width="500px">
  <b-flex>
    <b-btn color="danger">No</b-btn>
    <b-spacer></b-spacer>
    <b-btn color="primary">Accept</b-btn>
    <b-spacer></b-spacer>
    <b-btn color="secondary">Cancel</b-btn>
  </b-flex>
</b-card> 
</div>
</template>
```
:::

<style>
/* Adding some margin to make the buttons look good */
.btn{
  margin:5px;
}
</style>