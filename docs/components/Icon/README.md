# Icon <Badge type="warning" text="Beta"></Badge>

Using the icon element, you can display any icon from [material design icons](https://materialdesignicons.com), depending on the version of the CDN you put. 

::: tip INFO
Custom webfonts will be coming soon
:::

## Installation

If you haven't added it yet, here's the code for the CDN.

```html
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css">
```

After that, just specify the name of the icon with the `name` attribute. Here's a simple example

::: demo
```vue
<template>
<div class="center">
  <b-icon name="play"></b-icon>
</div>
</template>
```
:::

## Height

You can also specify the height of the icon using the `height` attribute. It can be any font-size value.

::: demo
```vue
<template>
<div class="center">
  <b-icon height="50px" name="run"></b-icon>
</div>
</template>
```
:::
<style>
.ml-2{
  margin-left: 5px;
}
</style>