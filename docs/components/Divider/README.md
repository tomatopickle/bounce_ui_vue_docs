# Divider

A divider is typically a thin line that separates lists or groups of content. It can be used anywhere, but is mostly designed to use in cards.

## Default

:::demo

```vue
<template>
<div class="center">
  <b-card>
    <b-btn block color="success">Yes</b-btn>
    <b-divider>Or</b-divider>
    <b-btn block color="danger">No</b-btn>
  </b-card>
</div>
</template>
```
:::

## Borderless

:::demo

```vue
<template>
<div class="center">
  <b-card>
    <p>Which is you're favorite?</p>
    <b-btn block color="primary">Cats</b-btn>
    <b-divider borderless>Or</b-divider>
    <b-btn block color="primary">Puppies</b-btn>
    <br>
  </b-card>
</div>
</template>
```
:::