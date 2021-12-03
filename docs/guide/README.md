---
# NavLink
next: 
 text: Components
 link: ./components
---

# Bounce UI for Vue

## Getting Started

::: tip Info
The npm package for Bounce UI Vue will be released soon
:::

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

All set up? Check out [Components](../bounce_ui_vue_docs/components/)
