# Buttons

Buttons allow users to take actions, and make choices, with a single tap. 

## Variants

Each variant of buttons have different prominence. For example, the outline buttons are more prominent than the ghost buttons, but the default buttons are more prominent than the outline buttons.

### Default 

These are the default buttons, they are the most prominent buttons

:::demo

```vue
<template>
<div class="center">
  <b-btn  color="primary">Primary</b-btn>
  <b-btn color="secondary">Secondary</b-btn>
  <b-btn color="success">Success</b-btn>
  <b-btn color="danger">Danger</b-btn>
 </div>
</template>
```
:::

### Outlined

Outlined buttons are considered secondary buttons. These are used next to a primary button, which will have the preferred action. Add the `outline` attribute to make a button outlined.
:::demo

```vue
<template>
<div class="center">
  <b-btn outline>Default</b-btn>
  <b-btn outline color="primary">Primary</b-btn>
  <b-btn outline color="secondary">Secondary</b-btn>
  <b-btn outline color="success">Success</b-btn>
  <b-btn outline color="danger">Danger</b-btn>
</div>
</template>
```
:::

### Ghost

Ghost buttons are considered tertiary buttons. They have the least prominence.

:::demo

```vue
<template>
<div class="center">
  <b-btn ghost>Default</b-btn>
  <b-btn ghost color="primary">Primary</b-btn>
  <b-btn ghost color="secondary">Secondary</b-btn>
  <b-btn ghost color="success">Success</b-btn>
  <b-btn ghost color="danger">Danger</b-btn>
</div>
</template>
```
:::

## Icons

There are two types of buttons with icons, one with only a icon, the other with text and icon.

### Icon Button

Add the `icon` attribute to get an icon button, make sure you don't have text inside the button.

:::demo

```vue
<template>
<div class="center">
  <b-btn icon ghost >
     <b-icon name="mdi mdi-brightness-6"></b-icon>
  </b-btn>
  <b-btn color="danger" icon ghost>
     <b-icon name="mdi mdi-delete"></b-icon>
  </b-btn>
  <b-btn color="success" icon ghost ripple >
     <b-icon name="mdi mdi-content-save">
     </b-icon>
  </b-btn>
  <b-btn color="primary" icon ghost bounce>
     <b-icon name="mdi mdi-play"></b-icon>
  </b-btn>
  <b-btn color="success" icon outline>
     <b-icon name="mdi mdi-check"></b-icon >
  </b-btn>
  <b-btn color="primary" icon>
     <b-icon name="mdi mdi-bluetooth"></b-icon>
  </b-btn>
</div>
</template>
```
:::

### Icons button with text

Adding an icon to a button makes the button more prominent. To position the icon, add the `left` or `right` attribute to the `b-icon` component.

:::demo

```vue
<template>
<div class="center">
  <b-btn color="primary">
    Run
    <b-icon right name="mdi mdi-play" fill="white"></b-icon>
  </b-btn>
  <b-btn color="success" ghost>
    Save
    <b-icon left name="mdi mdi-content-save"></b-icon>
  </b-btn>
  <b-btn outline color="danger">
    Delete
    <b-icon left name="mdi mdi-delete"></b-icon>
  </b-btn>
  </div>
</template>
```
:::

## Circular

Buttons can be made round by adding the `circle` attribute. Using this with the [icon](#icons) attribute will give you a FAB (Floating action button). This attribute can also be used with a normal button. 

::: tip

If you're creating a FAB, make sure the `b-icon` component has at least `25px` height.

:::

:::demo

```vue
<template>
<div class="center">
  <b-btn circle icon>
    <b-icon size="25px" name="mdi mdi-brightness-6"></b-icon>
  </b-btn>
  <b-btn bounce circle color="primary" icon>
    <b-icon size="25px" name="mdi mdi-play" fill="white"></b-icon>
  </b-btn>
  <b-btn circle color="success" ghost>
    Save
    <b-icon left name="mdi mdi-content-save"></b-icon>
  </b-btn>
  <b-btn circle outline color="danger">
    Delete
    <b-icon left name="mdi mdi-delete"></b-icon>
  </b-btn>
  </div>
</template>
```
:::

## Glass

If you have content below you're button, you can add the `glass` attribute to make it look better

:::demo

```vue
<template>
<div class="center">
  <b-card src="https://news.microsoft.com/wp-content/uploads/prod/sites/612/2021/06/Windows-11-Bloom-Screensaver-Dark-800x533.jpg" width="300px">
    <template v-slot:header>Windows 11 Release</template>
    <p>
      Windows 11 will start to become available on October 5, 2021
    </p>
    <template v-slot:footer>
      <b-flex>
        <b-spacer></b-spacer>
        <b-btn glass size="medium" class="mx-1" color="primary"
          >Read More <b-icon right name="mdi mdi-chevron-right"></b-icon
        ></b-btn>
      </b-flex>
    </template>
  </b-card>
</div>
</template>
```
:::

## Size

Besides its normal size, buttons come in four sizes, tiny, small, medium, large.

:::demo

```vue
<template>
<div class="center">
  <b-flex>
    <b-btn>Default</b-btn>
    <b-btn size="tiny">Tiny</b-btn>
    <b-btn size="small">Small</b-btn>
    <b-btn size="medium">Medium</b-btn>
    <b-btn size="large">Large</b-btn>
  </b-flex>
</div>
</template>
```
:::

## Effects

Buttons can have a different click effect, if you feel like the default button click effect is boring.

::: tip 
Normally, the box-shadow that comes when a button is clicked is removed when the `ripple` or `bounce` attributes are added. If you want the box-shadow, add the `focus-border` attribute. Also, try to maintain consistency when using these, since using them inconsistently might confuse the user.
:::
### Ripple

This will give a ripple effect when a user clicks on it.

:::demo

```vue
<template>
<div class="center">
  <b-btn ripple>Default</b-btn>
  <b-btn ripple outline>Outlined</b-btn>
  <b-btn ripple color="secondary">Secondary</b-btn>
  <b-btn ripple color="success">Success</b-btn>
  <b-btn ripple color="danger">Danger</b-btn>
  <b-btn ripple focus-border color="primary">With Focus Border</b-btn>
</div>
</template>
```
:::

### Bounce

The `bounce` attribute will make the button scale down when it being clicked.

:::demo

```vue
<template>
<div class="center">
  <b-btn bounce>Default</b-btn>
  <b-btn bounce outline>Outlined</b-btn>
  <b-btn bounce color="secondary">Secondary</b-btn>
  <b-btn bounce color="success">Success</b-btn>
  <b-btn bounce color="danger">Danger</b-btn>
  <b-btn bounce focus-border color="primary">With Focus Border</b-btn>
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