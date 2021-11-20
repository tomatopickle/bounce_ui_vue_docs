# Sidebar <Badge text="alpha" type="danger"></Badge>

Sidebars are elements that are in the left or right side of an application. For now, you can only use sidebars inside the prepend and append slots of the [App](/components/app) component.

::: demo
```vue
<template>
<div class="center">
   <b-app>
   <b-container>
   <b-btn color="primary" @click="sidebar = !sidebar">Open Sidebar</b-btn>
   </b-container>
      <template v-slot:append>
        <transition name="fade" :duration="{ enter: 0, leave: 50 }">
          <b-sidebar width="400px" v-show="sidebar">
            <template v-slot:header>
              <b-flex>
                <h3>Database Info</h3>
                <b-spacer></b-spacer>
                <b-btn @click="sidebar = false" ghost icon
                  ><b-icon name="close"></b-icon
                ></b-btn>
              </b-flex>
            </template>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                iure quam voluptates maiores magnam, commodi quod molestiae
                quasi voluptas doloribus molestias cumque consequuntur!
                Molestiae recusandae nam dolores reprehenderit incidunt ab.
              </p>
            </div>
            <template v-slot:footer>
              <b-btn color="primary" block>View Settings</b-btn>
              <br />
              <b-btn color="primary" block outline>Open Docs </b-btn>
            </template>
          </b-sidebar>
        </transition>
      </template>
    </b-app> 
    </div>
</template>
<script>
export default{
  data: () =>{
    return{
     sidebar:false,
    }
  }
}
</script>
<style>
/* To simulate default styles */
.b-app{
  background-color: var(--c-bg);
  padding: 5px;
  width:100%;

}
.b-app-side + div{
  flex-grow:1;
}
.center{
  width:90%;
}
</style>
```
:::


## Slots

The Sidebar component has two slots. The `header` and `footer` slots. As the name suggests, the `header` slot is for the heading and and icon buttons, and the `footer` slot comes at the bottom of the sidebar and can be used to show the actions available for the sidebar.
