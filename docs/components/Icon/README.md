# Icon

Using the icon element, you can display any webfont you want. We recommend using [materialdesignicons.com](https://materialdesignicons.com), since they have a large collection of icons.

In this example, we'll be using Material Design Icons.

## Installation

If you haven't added it yet, here's the code for the CDN.

```html
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css">
```

After that, just specify the class of the icon with the `name` attribute. Here's a simple example

::: demo
```vue
<template>
<div class="center">
  <b-icon name="mdi mdi-play"></b-icon>
</div>
</template>
```
:::

## Size

You can also specify the size of the icon using the `size` attribute. It can be any font-size value.

::: demo
```vue
<template>
<div class="center">
  <b-icon size="50px" name="mdi mdi-run"></b-icon>
</div>
</template>
```
:::
<style>
.ml-2{
  margin-left: 5px;
}
</style>

## Other Webfonts

As said before, you can use any other webfont you prefer, here's an example with [Font Awesome](https://fontawesome.com)

::: demo
```vue
<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
<div class="center">
  <b-icon size="50px" name="fas fa-running"></b-icon>
</div>
</template>
```
:::

## SVGs

You can use SVG's too, just remember that the `size` attribute won't work with SVGs.

::: demo
```vue
<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
<div class="center">
  <b-icon size="50px">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z"/></svg>
  </b-icon>
</div>
<!-- SVG from https://iconmonstr.com/-->
</template>
```
:::