# Card

A card can contain almost anything you want, so we've made the usage of cards as simple as possible. Here are a few examples

## Default

::: demo
```vue
<template>
<div class="center">
   <b-card width="250px">
     Hello, cards are awesome
   </b-card>
   <br>
  <b-card width="250px">
     <template v-slot:header>Introducing Bounce UI</template>
     Bounce UI is a design system focused on simplicity and consistency.
     <template v-slot:footer>
     <b-flex>
       <b-spacer></b-spacer>
       <b-btn color="primary" size="small">
       Read More
       <b-icon right name="chevron-right"></b-icon>
       </b-btn>
     </b-flex>
     </template>
   </b-card>
   </div>
</template>

```
:::

## Glass

If you have an image that you want to show with the card, you can use the `glass` attribute. And to specify the image source use the `src` attribute.

::: demo
```vue
<template>
  <div class="center">
      <b-card src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/Monterey-Graphic-8-dragged.jpeg?quality=82&strip=all&w=1000" width="300px">
          <template v-slot:header>MacOS Montrey</template>
          <p>The calm after Big Sur</p>
          <template v-slot:footer>
              <b-flex>
                  <b-spacer></b-spacer>
                  <b-btn glass size="medium" color="primary">Read More <b-icon right name="chevron-right"></b-icon></b-btn>
              </b-flex>
          </template>
      </b-card>
  </div>
</template>

```
:::


## Loading

If you want to indicate that the card is loading, just add the `loading` attribute.

::: demo
```vue
<template>
  <div class="center">
     <b-card width="300px" squircle loading>
              <template v-slot:header>Sign Up</template>
              <p>
                <b-input circle ghost label="User Name" placeholder="User Name">
                  <template v-slot:inner-prepend>
                    <b-icon name="account"></b-icon>
                  </template>
                </b-input>
                <b-input
                  class="my-1"
                  circle
                  type="password"
                  ghost
                  label="Password"
                  placeholder="Password"
                >
                  <template v-slot:inner-prepend>
                    <b-icon name="lock"></b-icon>
                  </template>
                </b-input>
              </p>
              <br />
              <template v-slot:footer>
                <b-btn block circle color="primary" loading>Sign Up</b-btn>
                <b-divider>Or</b-divider>
                <b-btn circle block ghost color="primary">Login</b-btn>
              </template>
            </b-card>
  </div>
</template>

```
:::

## Slots

### Header

The `header` slot, as the name suggests, is for the heading of the card.

### Footer

The `footer` slot comes at the bottom of the card, it usually contains action buttons or footer content.

### Floating Footer

We also have a `floating` slot which gives a floating footer, it can be used for showing binary actions. Like this example

::: demo
```vue
<template>
  <div class="center">
    <b-card width="300px">
      <template v-slot:header>Confirm</template>
      <p>Confirm Bounce UI is the best</p>
      <br />
      <template v-slot:float>
        <b-btn class="mx-1" icon outline color="danger"
          ><b-icon  name="close"></b-icon
        ></b-btn>
        <b-btn class="mx-1" icon outline color="success"
          ><b-icon name="check"></b-icon
        ></b-btn>
      </template>
    </b-card>
  </div>
</template>

```
:::

<style>
.mx-1{
  margin-left:5px;
  margin-right:5px;
}
</style>