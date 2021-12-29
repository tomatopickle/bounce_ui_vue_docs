# Nav

A Navbar is a horizontal bar on the top of an application. It as relevant links, actions and the brand name and/or logo. 

::: demo
```vue
<template>
<div class="center">
  <b-nav >
        <template v-slot:branding>
          <b-flex>
            <img height="30px" style="height: 30px;margin-right:5px;"  :src="$withBase('./images/logo.png')" />
            <h2>Bounce UI</h2>
          </b-flex>
        </template>
        <template v-slot:main>
          <b-input placeholder="Search" id="search_input">
            <template v-slot:inner-prepend>
              <b-icon name="mdi mdi-magnify"></b-icon>
            </template>
          </b-input>
        </template>
        <template v-slot:actions>
          <b-btn class="mx-1" color="primary">
          New Design
          <b-icon right name="mdi mdi-plus"></b-icon>
          </b-btn>
        </template>
      </b-nav>
    </div>
</template>

<style>
/* To simulate default styles */
.center{
  width:100%;
}
h2{
  border:none;
}
#search_input{
  width:60%;
  margin:auto;
  display:block;
}
</style>
```
:::


## Slots

### Branding

The `branding` slot, as the name suggest, is the place where you have you're app's name and logo. It comes at the left side of the navbar.

### Center

The `center` slot can contain, for example a search bar. It comes at the center of the navbar.


### Actions

The `actions` slot contains all you're actions and links. It comes at the right side of the navbar.

<style>
.mx-1{
  margin-left:5px;
  margin-right:5px ;
}
</style>