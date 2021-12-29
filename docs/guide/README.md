---
# NavLink
next: 
 text: Components
 link: ./components
---

# Bounce UI for Vue

## Getting Started
### Installing via NPM

Just type in the following command and you'l have Bounce UI Vue installed in you're machine.

```shell 
npm i bounce-ui-vue 
```
After that, import it like so, assuming the variable for you're Vue app instance is `app`.

```js
import bounce_ui from "bounce-ui-vue";
app.use(bounce_ui);
```

#### Full Example
First install the Vue CLI, then run
```shell
vue create bounce_ui_app
```
You will be asked for the preset, select the default Vue 3 preset
```shell
? Please pick a preset:
  Default ([Vue 2] babel, eslint)
> Default (Vue 3) ([Vue 3] babel, eslint)
  Manually select features
```
This is how you're project folder will look like
```
bounce_ui_app
   |__node_modules
   |__public
   |__src
      |_assets
      |_components
      |_App.vue
      |_main.js
   |_.gitignore
   |_babel.config
   |_package.json
   |_README.md
   |_package-lock.json
```
Add this in your `src/main.js` file
```js
import { createApp } from 'vue';
import bounce_ui from "bounce-ui-vue";
import App from './App.vue';
const app = createApp(App);
app.use(bounce_ui);
app.mount('#app');
```
Add this in your `src/App.vue` file
```vue
<template>
<b-app>
      <b-container>
               <h1>Bounce UI ready!</h1>
               <br>
               <b-btn @click="$toggleTheme()" color="primary">Toggle Theme</b-btn>
            </b-container>
   </b-app>
   </template>
```
Aaand voila!, you'l have Bounce UI Vue running in you're Vue app.
### Installing via CDN

First, download the <a download :href="$withBase('/dist/bounce_ui.umd.js')">umd file</a> and the <a download :href="$withBase('/dist/bounce_ui.css')">css file</a> for Bounce UI.

Here is some example code to get you started, no download required!

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bounce-ui-vue@latest/dist/bounce_ui.css">
      <title>Bounce UI</title>
   </head>
   <body>
      <div id="app">
         <b-app>
            <b-container>
               <h1>{{heading}}</h1>
               <br>
               <b-btn @click="$toggleTheme()" color="primary">Toggle Theme</b-btn>
               <br><br>
               <b-input v-model="heading"></b-input>
            </b-container>
         </b-app>
      </div>
   </body>
   <script src="https://unpkg.com/vue@next"></script>
   <script src="https://cdn.jsdelivr.net/npm/bounce-ui-vue@latest/dist/bounce_ui.umd.min.js"></script>
   <script defer>
      const App = {
        data() {
          return {
            heading:"Bounce UI ready!"
          }
        }
      }
      
      const app = Vue.createApp(App);
      app.use(bounce_ui.default);
      app.mount('#app');
   </script>
</html>
```
View and fork this example [here](https://replit.com/@AbaanShanid/Bounce-UI-Demo)

All set up? Check out [Components](../components/)
