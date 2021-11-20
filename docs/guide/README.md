---
# NavLink
next: 
 text: Components
 link: /components
---

# Bounce UI for Vue

## Getting Started

::: tip Info
The npm package for Bounce UI Vue will be released soon
:::

First, download the<a download href="/dist/bounce_ui.umd.js"> umd file</a> and the <a download href="/dist/bounce_ui.css">css file</a> for Bounce UI.

Here is some example code to get you started, assuming you've saved the files in a dist folder

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css">
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./dist/bounce_ui.css">
      <title>Bounce UI</title>
   </head>
   <body>
      <div id="app">
         <b-app>
            <b-container>
               <h1>Bounce UI ready!</h1>
               <br>
               <b-btn @click="$toggleTheme()" color="primary">Toggle Theme</b-btn>
            </b-container>
         </b-app>
      </div>
   </body>
   <script src="https://unpkg.com/vue@next"></script>
   <script defer src="./dist/bounce_ui.umd.min.js"></script>
   <script defer src="script.js"></script>
</html>
```

All set up? Check out [Components](/components/)