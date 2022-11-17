<template>
  
      <q-scroll-area class="fit">
        <q-list >
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item active-class="text-orange" exact clickable :to="menuItem.to" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator"/>
          </template>
        </q-list>
      </q-scroll-area>
   
</template>

<script>
import { defineComponent } from "vue";
const menuList = [

  {
    icon: "home",
    label: "Home",
    separator: true,
    to: "/",
  },

  {
    icon: "group_add",
    label: "Proveedores",
    separator: true,
    to: "provider",
  },

  {
    icon: "fa-solid fa-seedling",
    label: "Productos",
    separator: true,
    to: "provider",
  },
  
 
];
export default defineComponent({
  setup() {
 
    return {

      menuList,
    
    };
  },
});

</script>