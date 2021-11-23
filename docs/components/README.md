# Components

## Controls
<br>
<div class="grid-4_sm-1_md-2">
<RouterLink to="/components/Button">
  <b-card class="component_card col">
    <template v-slot:header>
    Button
    </template>
    <div class="component">
      <b-btn color="primary">Button</b-btn>
    </div>
  </b-card>
</RouterLink>
<RouterLink to="/components/Tabs" style="margin-left: 10px;">
  <b-card class="component_card col">
    <template v-slot:header>
    Tabs
    </template>
    <div style="pointer-events:none;margin-top:5px;">
      <b-tab v-model="tabIndex" :tabs="tabs"></b-tab>
      </div>
  </b-card>
</RouterLink>
<br>
</div>

## Form
<br>
<div class="grid-4_sm-1_md-2">
<RouterLink to="/components/Input">
  <b-card class="component_card col">
    <template v-slot:header>
    Input
    </template>
    <div class="component">
      <b-input placeholder="Input"></b-input>
    </div>
  </b-card>
</RouterLink>
</div>
 
## Elements
<br>
<div class="grid-2_sm-1_md-2">
<RouterLink to="/components/Sidebar" class="col">
  <b-card class="component_card">
    <template v-slot:header>
    SideBar
    </template>
    <div class="component">
     A sidebar is an element that comes from the left or right side of an application
    </div>
  </b-card>
</RouterLink>
<RouterLink to="/components/Nav" class="col">
  <b-card class="component_card">
    <template v-slot:header>
    Nav
    </template>
     <b-nav style="height:50px;">
          <template v-slot:branding>
            <b-flex style="margin-top: -4px;">
              <img height="30px" class="mr-3" :src="$withBase('/images/logo.png')"  style="height: 15px;margin-right: 12px;"/>
              <h6 style="margin: -7px;">Bounce UI</h6>
            </b-flex>
          </template>
        </b-nav>
  </b-card>
</RouterLink>
<RouterLink to="/components/Card" class="col">
  <b-card class="component_card">
    <template v-slot:header>
    Card
    </template>
     <div class="component">
     <b-card width="250px" style="min-width:100px">
     <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     </div>
     </b-card>
     </div>
  </b-card>
</RouterLink>
<RouterLink to="/components/Spinner"  class="col">
<b-card class="component_card">
  <template v-slot:header>
  Spinner
  </template>
  
   <div class="component">
   <br>
    <b-spinner></b-spinner>
   </div>
</b-card>
</RouterLink>
<RouterLink to="/components/Modal"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  Modal
  </template>
  <div class="component">
   A modal is an overlay that requires the user to interact with it and is designed to elicit a response from the user
  </div>
</b-card>
</RouterLink>
<RouterLink to="/components/Icon"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  Icon
  </template>
  <div class="component">
   The icon element is an important part of Bounce UI and is used in multiple components.
  </div>
</b-card>
</RouterLink>

</div>

## Layout
<br>
<div class="grid">
<RouterLink to="/components/App"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  App
  </template>
  <div class="component" style="width:100%">
   A wrapper for the entire application
  </div>
</b-card>
</RouterLink>
<RouterLink to="/components/Container"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  Container
  </template>
  <div class="component" style="width:100%">
   A wrapper for specific content, gives margin
  </div>
</b-card>
</RouterLink>
<RouterLink to="/components/Flex"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  Flex Box
  </template>
  <div class="component" style="width:100%">
   A simple flex box that is used in a lot of components
  </div>
</b-card>
</RouterLink>
<RouterLink to="/components/Divider"  class="col">
<b-card class="component_card col">
  <template v-slot:header>
  Divider
  </template>
  <div class="component" style="width:100%">
   A divider is typically a thin line that separates lists or groups of content.
  </div>
</b-card>
</RouterLink>

</div>
 
<script>
import { h, ref } from 'vue'

export default {
 data:()=>{
   return {
     tabs: [
        { name: "Music", value: "music" },
        { name: "Photos", value: "photo"},
        { name: "Videos", value: "videos" },
      ],
      tabIndex:1,
      sidebar:true
   }
 }
}
</script>
<style>
  .component_card .component {
    margin: auto;
    display: block;
    width: max-content;
    margin-top: 5px;
    margin-bottom: 15px;
    pointer-events: none;
    max-width: 100%;
}

.card.component_card {
    cursor: pointer;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color:  #fdfdfd !important;
    height: 100%;
    width: 100%;
    overflow-wrap: initial;
}

.dark .card.component_card{
    box-shadow: rgb(84 84 84 / 77%) 0 0 0 1px;
    background-color: var(--c-bg-light) !important;
}

.dark .card.component_card:hover {
    transition:background-color .15s;
    background-color:  #2a2a2f !important;
}
.card.component_card:hover {
    transition:background-color .15s;
    background-color: var(--c-bg-light) !important;
}
*{
    text-decoration: none !important;
}
  </style>