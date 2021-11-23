# Input

Input controls are interactive elements of an app. It allows users to enter the information.

## Default

::: demo
```vue
<template>
<div class="center">
  <b-input placeholder="Placeholder"></b-input>
</div>
</template>
```
:::

## Ghost

If you want a little more subtle input, use the `ghost` attribute.

::: tip INFO
To have enough contrast, this attribute has a slight difference in styles when it's inside a card element
:::

::: demo
```vue
<template>
<div class="center">
  <div id="body">
    <b-input ghost placeholder="Normal Ghost Input"></b-input>
  </div>
  <br>
  <b-card>
  <b-input ghost placeholder="Inside a Card Ghost Input"></b-input>
  </b-card>
</div>
</template>
<style>
/* To show ghost input styles outside a card */
#body{
  background-color: var(--c-bg);
  padding: 5px;
  border-radius: 7px;
}
</style>
```
:::

## Icons

You can add icons in multiple places of the input. Although it's recommended to have only one icon per input, you can add icons on both sides of the input inside and outside.

::: demo
```vue
<template>
<div class="center">
  <b-flex>
    <b-input placeholder="Search">
      <template v-slot:prepend>
        <b-icon name="mdi mdi-magnify">
        </b-icon>
      </template>
    </b-input>
    <b-input placeholder="Search">
      <template v-slot:append>
        <b-icon name="mdi mdi-magnify">
        </b-icon>
      </template>
    </b-input>
    <b-input placeholder="Search">
      <template v-slot:inner-prepend>
        <b-icon name="mdi mdi-magnify">
        </b-icon>
      </template>
    </b-input>
    <b-input placeholder="Search">
      <template v-slot:inner-append>
        <b-icon name="mdi mdi-magnify">
        </b-icon>
      </template>
    </b-input>
  </b-flex>
<br>
  <div id="body">
    <b-flex>
      <b-input ghost placeholder="Search">
        <template v-slot:prepend>
          <b-icon name="mdi mdi-magnify">
          </b-icon>
        </template>
      </b-input>
      <b-input ghost placeholder="Search">
        <template v-slot:append>
          <b-icon name="mdi mdi-magnify">
          </b-icon>
        </template>
      </b-input>
      <b-input ghost placeholder="Search">
        <template v-slot:inner-prepend>
          <b-icon name="mdi mdi-magnify">
          </b-icon>
        </template>
      </b-input>
      <b-input ghost placeholder="Search">
        <template v-slot:inner-append>
          <b-icon name="mdi mdi-magnify">
          </b-icon>
        </template>
      </b-input>
    </b-flex>
  </div>
</div>
</template>
<style>
/* Adding some margin to get some space between the inputs */
.input-parent{
  margin: 5px;
}
/* To show ghost input styles outside a card */
#body{
  background-color: var(--c-bg);
  padding: 5px;
  border-radius: 7px;
}
</style>
```
:::

## Circular

Inputs can also be circular, just add the `circle` attribute. Again please try maintaining consistency when using this.

::: demo
```vue
<template>
<div class="center">
  <b-input circle placeholder="Placeholder"></b-input>
  <br>
  <div id="body">
    <b-input ghost circle placeholder="Placeholder"></b-input>
  </div>
  <br>
  <b-card>
  <b-input ghost circle placeholder="Placeholder"></b-input>
  </b-card>
</div>
</template>
<style>
/* To show ghost input styles outside a card */
#body{
  background-color: var(--c-bg);
  padding: 5px;
  border-radius: 7px;
}
</style>
```
:::